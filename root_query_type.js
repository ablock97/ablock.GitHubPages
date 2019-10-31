WRITE A POST
Backend part with ExpressJS, GraphQL and MongoDB for a basic Todo app
danielpdev profile image danielpdev   Mar 3 ・5 min read 
#graphql #express #javascript #mongodb
Here is the live version on Glitch. (please make a remix before changing it)
Frontend part
Table of Contents
Table of Contents
What is graphql?
Intro
Install prerequisites
GraphQL types
TodoType
RootQueryType
MutationType
Glueing code
Starting Express GraphQL server
Testing queries and mutations
Conclusion
What is graphql?
A query language used to define an API which provides a complete and understandable description of the data and enables powerful developer tools.
More on Graphql.

Intro
This is the backend part of a basic TodoApp using ExpressJS and GraphQL.
Our Backend will use express-graphql combined with mongoose and for the server we will use ExpressJS.
To access the live version on Glitch.

Install prerequisites
Navigate to your projects directory and copy-paste the following commands:

mkdir todo-express-graphql && cd todo-express-graphql
npm install cors express express-graphql graphql mongoose
GraphQL types
cd todo-express-graphql && mkdir schema && cd schema && touch todo_type.js
TodoType
const mongoose = require('mongoose'); 
const graphql = require('graphql'); //package used to build our graphql schema
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql; //necessary types for defining our schema

const TodoType = new GraphQLObjectType({
  name:  'TodoType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
  })
}); 

module.exports = TodoType;
When we define a type for our GraphQL schema we need to create an instance of GraphQLObjectType and pass an object with the required fields for our type.

name is the only required field on a GraphQLObjectType.
Some of the most commonly used properties that we will cover later in this post are fields, needed to define the attributes that this type resolves to and resolve function.
Please refer to official graphql documentation regarding GraphQLObjectType

RootQueryType
