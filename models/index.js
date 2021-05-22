const User = require( './User' );
const Post = require( './Post' );
const Vote = require( './Vote' );
const Comment = require( './Comment' );

// create associations
    // one to many
User.hasMany( Post, {
    foreignKey: 'user_id'
} );

    // one to many
Post.belongsTo( User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
} );

    // many to many
User.belongsToMany( Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
} );

    // many to many
Post.belongsToMany( User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
} );

    // one to many
Vote.belongsTo( User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
} );

    // one to many
Vote.belongsTo( Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
} );

    // one to many
User.hasMany( Vote, {
    foreignKey: 'user_id'
} );

    // one to many
Post.hasMany( Vote, {
    foreignKey: 'post_id'
} );

Comment.belongsTo( User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
} );

Comment.belongsTo( Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
} );

User.hasMany( Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
} );

Post.hasMany( Comment, {
    foreignKey: 'post_id'
} );

module.exports = { User, Post, Vote, Comment };