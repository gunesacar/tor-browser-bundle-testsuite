function enum_all(){
    function enum_obj(obj, path){
        path = path || "";
        console.log(path);
        if (!obj || typeof obj !== 'object') {
            document.write(path, obj, ": ",obj+"<br>");
            return;
        }
            
        //var props = Object.getOwnPropertyNames(obj);
        for (var prop in obj) {
            //var prop = props[key];
            if ((typeof obj[prop] === 'object') && obj[prop]) {
                if ((path.indexOf(obj) === -1) && (prop.indexOf("mimeType") === -1)
                        && (prop.indexOf("plugins") === -1)){ // avoid circular refs
                    console.log("Recurse into"+path+"."+obj);
                    enum_obj(obj[prop], path+obj+"");  
                }
            }
            document.write(path, prop, ": ",obj[prop]+"<br>");
        }
    }
    enum_obj(screen);
    enum_obj(navigator);
    //enum_obj(window);
    enum_obj(navigator.plugins);
    
}