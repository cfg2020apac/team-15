import flask
import dash
import dash_html_components as html
import dash
import dash_table
import dash_core_components as dcc
import dash_bootstrap_components as dbc
import dash_html_components as html
import plotly.express as px
import pandas as pd
from jupyter_dash import JupyterDash
from dash.dependencies import Input, Output
import numpy as np
import plotly.graph_objects as go
# from team-15/backend/ import program
import program as pr
import sys
import json

server = flask.Flask(__name__)

def bar_program_volunteers(df, attendee):
    programName = df['programName']
    target = df[attendee[0]]
    actual = df[attendee[1]]

    fig = go.Figure()
    fig.add_trace(go.Bar(
        x=programName,
        y=actual,
        name='actual',
        marker_color='indianred'
    ))
     
    fig.add_trace(go.Bar(
        x=programName,
        y=target,
        name='target',
        marker_color='lightsalmon'
    ))

    if 'Volunteer' in attendee[0]:
        title = 'Actual VS Target Number of Attendees for Program (Volunteers)'
    else:
        title = 'Actual VS Target Number of Attendees for Program (Students)'
        
    fig.update_layout(barmode='group', xaxis_tickangle=-45, title_text=title)
    
    return fig

def rating_boxplot(df_data):
    
    fig = px.box(df_data, 
             x="programName", 
             y="ratings", 
             color="programName",
             labels={"programName":"Program"}
            )
    fig.update_traces(quartilemethod="exclusive")
    
    return fig

output = json.loads(pr.getAll())
df_1 = {'programName':[],
        'targetNoOfVolunteers':[],
        'actualNoOfVolunteers':[],
        'targetNoOfStudents':[],
        'actualNoOfStudents':[]}

for i in range(len(output)):
    df_1['programName'].append(output[0]['programName'])
    df_1['targetNoOfVolunteers'].append(output[0]['targetNoOfVolunteers'])
    df_1['actualNoOfVolunteers'].append(output[0]['actualNoOfVolunteers'])
    df_1['targetNoOfStudents'].append(output[0]['targetNoOfStudents'])   
    df_1['actualNoOfStudents'].append(output[0]['actualNoOfStudents'])

title = {
    'font-family': 'Poppins',
    'font-weight': 'bold',
    'font-size': '4em'
}
card = {
    'border-radius': '1em',
    'border': 0,
    'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)',
    'color': 'black',
    'font-family': 'Open Sans',
    "padding": "5px"
}
card2 = {
    'border-radius': '1em',
    'border': 0,
    'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)',
    'color': 'black',
    'font-family': 'Open Sans',
    "padding": "5px",
    'width':'20em'
}
row = {
    'margin-bottom':'4em'
}
row2 = {
    'margin-bottom':'4em',
    'width':"5em"
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
    'background': '#232946', 
    'padding': '2em 8em 2em 8em', 
    'color': 'white'
}

### adding title and graphs ###
title_component = html.Div(html.H1("D A S H B O A R D", style=title))

attendance_dccgraph = dcc.Graph(id='attendance-graph')
ratings_dccgraph = dcc.Graph(id='ratings-graph') # create 2 placeholders to populate with values later

attendance_card = dbc.Card(attendance_dccgraph, style=card)
ratings_card = dbc.Card(ratings_dccgraph, style=card)

### dropdown ###
attendeeDropdown = dcc.Dropdown(
    id='attendee-dropdown', 
    options=[
        {'label': 'Students', 'value': 'students'},
        {'label': 'Volunteers', 'value': 'volunteers'}
        ], 
    multi=False
)

widget_card = dbc.Card(html.Div([attendeeDropdown]), style=card2)


app = dash.Dash(
    __name__,
    external_stylesheets=["https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@400;500;700&display=swap", 
                        dbc.themes.BOOTSTRAP],
    # external_scripts=external_scripts,
    server=server,
    routes_pathname_prefix='/dash/'
)

### layout ###
layout = dbc.Container(
    [
        dbc.Row(
            dbc.Col(title_component),
            justify="center",
            align="center",
            className="text-center",
            style=row
        ),
        dbc.Row(
            widget_card, 
            style=row, 
            justify="left",
            align="left"
        ),
        dbc.Row(
            dbc.Col(attendance_card, style=row)
        ),
        dbc.Row(
            dbc.Col(ratings_card,  style=row)
        )
    ],
    
    style = dashboard,
    fluid = True,
)
app.layout = layout


@app.callback(
    
    Output('attendance-graph', 'figure'),
    Output('ratings-graph', 'figure'),
    
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
    ratings_fig.update_layout()
    
    return volunteer_attendance_fig, ratings_fig


if __name__ == '__main__':
    app.run_server(debug=True, port=8051)