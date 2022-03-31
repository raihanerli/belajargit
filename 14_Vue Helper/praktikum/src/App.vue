/* eslint-disable */
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
body{
        padding:0;
        margin: 0;font-family: Arial, Helvetica, sans-serif;
        
    }
    #todoList{
        box-sizing: border-box;
        width:100%;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 20px;
    }
    .card{
        box-sizing: border-box;
        width:60%;
        box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
        background-color:rgb(254, 255, 254);
        border-radius: 10px;

    }
    .card-header{
        box-sizing: border-box;
        padding:5px;
        padding-left: 5%;
        padding-right: 5%;
        width: 100%;
        background-color: rgb(93, 93, 240);
    }
    .card-body{
        box-sizing: border-box;
        width:100%;
        padding:10px;
        padding-left: 5%;
        padding-right: 5%;
        border-bottom: 1px solid rgb(206, 167, 167) ;
    }
    .list{
        box-sizing: border-box;
        margin-top:10px;
        margin-bottom: 10px;
        width:100%;
        display:flex;
        flex-flow: row wrap;
        justify-content:space-between; 
    }
    .card-footer{
        box-sizing: border-box;
        padding:5px;
        margin-top:5px;
        padding-bottom:10px;
        padding-left: 3%;
        padding-right: 3%;
        display:flex;
        flex-flow: row wrap;
        justify-content:space-between;
       
    }
    input{
        width:80%;
        padding:5px !important;
        border-radius: 1px;
        border: 1px solid  rgb(104, 92, 240)k;
    }
    h4{
        color:#fff !important;
        font-size: 20px;;
    }
    a{
        color: rgb(105, 0, 0) ;
        text-decoration: none !important;
    }
    #btn {
        width:20%;
        display: flex;
        flex-flow: row wrap;
        justify-content:space-between;
    }
    .text {
        width:70%;
    }
    .btn {
        padding:10px;
        border:1px solid #fff;
        border-radius: 3px;
        background-color: rgb(93, 93, 240);
        color:#ffff !important;
        cursor: pointer;


    }
    .bg-danger{
        background-color:rgb(241, 41, 41) !important;
    }
    label{
        color:blue;
        cursor: pointer;
    }
    label:hover{
        color:blueviolet;
    }</style>
