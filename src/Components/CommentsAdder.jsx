// import React, { Component } from 'react'
// import axios from 'axios'

// class CommentAdder extends Component {
//     state = {
//         username: '',
//         body: '',
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const {username, body} = this.state;
//             axios.post(`/api/articles/${article_id}/comments`, {
//                 username,
//                 body,
//             }).then((res) => {
//                 this.setState({
//                     username: '',
//                     body: ''
//                 })
//             })
//         }

//     handleChange = (e) => {
//         const {username, body} = e.target;
//         this.setState({
//             [username]: value
//         })
//     }
// }
