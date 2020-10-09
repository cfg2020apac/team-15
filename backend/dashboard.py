import flask
import pandas as pd
import numpy as np
import dash
import dash_html_components as html
import dash_table
import dash_core_components as dcc
import dash_bootstrap_components as dbc
import dash_html_components as html
import plotly.express as px
from dash.dependencies import Input, Output
import plotly.graph_objects as go
from program import program as pr
import json
from flask_cors import CORS

server = flask.Flask(__name__)
CORS(server)

output = json.loads(pr.getAll())
df_1 = {'programName':[],
        'targetNoOfVolunteers':[],
        'actualNoOfVolunteers':[],
        'targetNoOfStudents':[],
        'actualNoOfStudents':[]}

for i in range(len(output)):
    df_1['programName'].append(output[i]['programName'])
    df_1['targetNoOfVolunteers'].append(output[i]['targetNoOfVolunteers'])
    df_1['actualNoOfVolunteers'].append(output[i]['actualNoOfVolunteers'])
    df_1['targetNoOfStudents'].append(output[i]['targetNoOfStudents'])
    df_1['actualNoOfStudents'].append(output[i]['actualNoOfStudents'])

df_1 = pd.DataFrame(data=df_1)

def bar_program_volunteers(df, attendee):
    programName = df['programName']
    target = df[attendee[0]]
    actual = df[attendee[1]]

    fig = go.Figure()
    fig.add_trace(go.Bar(
        x=programName,
        y=actual,
        name='Actual',
        marker_color='indianred'
    ))
     
    fig.add_trace(go.Bar(
        x=programName,
        y=target,
        name='Target',
        marker_color='lightsalmon'
    ))

    if 'Volunteer' in attendee[0]:
        title = 'Number of Volunteers for Programmes'
    else:
        title = 'Number of Students for Programmes'
        
    fig.update_layout(barmode='group', xaxis_tickangle=-45, title_text=title)
    
    return fig

df_data = {'programName':[],
            'ratings':[]}
ratings = json.loads(pr.getProgramWithDataAnalytics())['result']
for i in range(len(ratings)):
    for k,v in ratings[i].items():
        df_data['programName'].append(k)
        df_data['ratings'].append(v)
        
def rating_boxplot(df_data):
    
    fig = px.box(df_data, 
            x="programName", 
            y="ratings", 
            color="programName",
            labels={"programName":"Program"},
            title="Program Ratings"
            )
    fig.update_traces(quartilemethod="exclusive")
    
    return fig

def cost_donutchart(df_cost):
    
    labels = df_cost['programName']
    values = df_cost['cost']
    
    fig = go.Figure(data=[go.Pie(labels=labels, values=values, hole=.4)])
    fig.update_layout(title_text="Costs per Program")

    return fig

df_cost = {'programName':[],
        'cost':[]}
for i in range(len(output)):
    df_cost['programName'].append(output[i]['programName'])
    df_cost['cost'].append(output[i]['cost'])
df_cost = pd.DataFrame(data=df_cost)

from dash.dependencies import Input, Output, State

PLOTLY_LOGO = "https://images.plot.ly/logo/new-branding/plotly-logomark.png"

search_bar = dbc.Row(
    [
        dbc.Col(dbc.Input(type="search", placeholder="Search")),
        dbc.Col(
            dbc.Button("Search", color="primary", className="ml-2"),
            width="auto",
        ),
    ],
    no_gutters=True,
    className="ml-auto flex-nowrap mt-3 mt-md-0",
    align="center",
)

navbar = dbc.Navbar(
    [
        html.A(
            # Use row and col to control vertical alignment of logo / brand
            dbc.Row(
                dbc.NavbarBrand("Navbar", className="mx-auto d-block"),
                align="right",
                no_gutters=True
            ),
        ),
        dbc.NavbarToggler(id="navbar-toggler"),
        dbc.Collapse(search_bar, id="navbar-collapse", navbar=True),
    ],
    color="white",
    dark=True
)

title = {
    'font-family': 'Lucida Grande',
    'font-weight': 'bold',
    'font-size': '4em'
}
card = {
    'border-radius': '1em',
    'border': 0,
    'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)',
    'color': 'black',
    'font-family': 'Lucida Grande',
    'padding':'5px',
    'width' : '100%'
    # 'height':'20em'
    
}
card2 = {
    'border-radius': '1em',
    'border': 0,
    'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)',
    'color': 'black',
    'font-family': 'Lucida Grande',
    'width':'20em'
}
row = {
    'margin-bottom':'4em'
}
row2 = {
    'margin-bottom':'4em',
    'width':"100%"
}
cell = {
    "padding": "5px",
    "textAlign": "center",
    'color': 'black'
}
header = {
    "backgroundColor": "rgb(230, 230, 230)",
    "fontWeight": "bold",
}
dashboard = {
    'background': '#ffffff', 
    'padding': '2em 8em 2em 8em', 
    'color': 'white'
}

### adding title and graphs ###
title_component = html.Div(html.H1("D A S H B O A R D", style=title))

attendance_dccgraph = dcc.Graph(id='attendance-graph')
ratings_dccgraph = dcc.Graph(id='ratings-graph') 
cost_dccgraph = dcc.Graph(id='cost-graph')

attendance_card = dbc.Card(attendance_dccgraph, style=card)
ratings_card = dbc.Card(ratings_dccgraph, style=card2)
cost_card = dbc.Card(cost_dccgraph, style=card2)

### dropdown ###
print("Demographics")
attendeeDropdown = dcc.Dropdown(
    id='attendee-dropdown', 
    options=[
        {'label': 'Students', 'value': 'students'},
        {'label': 'Volunteers', 'value': 'volunteers'}
        ], 
    multi=False
)

widget_card = dbc.Card(
                    [html.Div([attendeeDropdown]), 
                    html.Div([attendance_dccgraph])],
                    style=card)


app = dash.Dash(
    __name__,
    external_stylesheets=['https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/lux/bootstrap.min.css'],
    server=server,
    routes_pathname_prefix='/dash/'
)

### layout ###
layout = dbc.Container(
    [  
        dbc.Row(
            dbc.Col(navbar),
            justify="center",
            align="center",
            className="text-center",
            style=row
        ),
        dbc.Row(
            dbc.Col(title_component),
            justify="center",
            align="center",
            className="text-center",
            style=row
        ),
        dbc.Row(
            widget_card, 
            style=row2, 
            justify="center",
            align="center"
        ),
        dbc.Row([
            dbc.Col(cost_card, style=row),
            dbc.Col(ratings_card, style=row)
        ])
    ],
    style = dashboard,
    fluid = True,
)
app.layout = layout



    
@app.callback(
    Output('attendance-graph', 'figure'),
    Output('ratings-graph', 'figure'),
    Output('cost-graph', 'figure'),
    [
        Input('attendee-dropdown', 'value')
    ]
    )

def update_figure(attendee):

    if attendee is None:
        attendee = ['targetNoOfVolunteers', 'actualNoOfVolunteers'] # set default value
    elif attendee == 'students':
        attendee = ['targetNoOfStudents', 'actualNoOfStudents']
    else:
        attendee = ['targetNoOfVolunteers', 'actualNoOfVolunteers']
        
    volunteer_attendance_fig = bar_program_volunteers(df_1, attendee)
    volunteer_attendance_fig.update_layout()
    
    ratings_fig = rating_boxplot(df_data)

    cost_fig = cost_donutchart(df_cost)
    
    return volunteer_attendance_fig, ratings_fig, cost_fig


if __name__ == '__main__':
    print(json.loads(pr.getAll()))
    print(json.loads(pr.getProgramWithDataAnalytics()))
    app.run_server(debug=True, port=8051)