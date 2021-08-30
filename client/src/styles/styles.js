import { makeStyles } from "@material-ui/core/styles";


export const lookAndFeel = () => {
    return {
      mainContainer: {
        marginLeft: "20%",
        marginTop: 0,
        marginRight: "20%",
        flexGrow: 1,
        padding: "10px",
        borderRadius: "5px"
      },
      button: {
        padding: "5px",
        cursor: "pointer",
        margin: "10px",
        background: '#F5F5F5',
        fontWeight: "bold",
        "&:hover": {
          background: "blue",
        },
      },
    };
  };
  
  export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      padding: theme.spacing(4),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    MovieCard: {
      itemAlign: "center",
      textAlign: "center",
      marginLeft: "4rem",
      marginRight: "4rem",
      marginTop:"3rem",
      backgroundColor: "#F5F5F5",
      borderRadius: "10px",
      boxShadow: "1px 1px 1px 1px"
    },
    backButton:{
      marginLeft: '10px',
      marginTop: "10px"
    },
  }));