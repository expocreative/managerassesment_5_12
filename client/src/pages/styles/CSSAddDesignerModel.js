import { makeStyles } from '@material-ui/core/styles';

export const CSSAddDesignerModel = makeStyles({
    model:{
        width:500,
        height:300,
        position:'absolute',
        display:'flex',
        flexDirection:'column'
    },
    modelHeader:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        height:40,
        backgroundColor:'#efefef',
        paddingLeft:10
    },
    msg:{
        fontSize:15,
        lineHeight:1.5,
        color:'grey',
        margin:15,
        height:100,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
    btnHolder:{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    content:{
        padding:40,
        height:110
    },
    field:{
        width:'100%',
        display:'flex',
        justifyContent:'flex-start',
        paddingTop:10,
        alignItems:'center'
    },
    label:{
        width:120,
        height:30,
        paddingTop:10,
        display:'inline-block'
    },
    input:{
        height:30,
        width:400,
        display:'inline-block'
    },
    error:{
        width:'100%',
        display:'flex',
        justifyContent:'flex-end',
        fontSize:12,
        color:'red'
    }
})
