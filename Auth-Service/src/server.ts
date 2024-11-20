const serverConfig=(server:any,config:any)=>{

    console.log("entered into this function")
    const startServer=()=>{
        server.listen(config.port, () => {
            console.log(`Server listening on port ${config.port} - Auth Service`);
          });
    }
    return {
        startServer
    }
}

export default serverConfig