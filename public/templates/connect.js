define(["ext/jade"],function(jade){return function anonymous(locals,attrs,escape,rethrow){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,buf=[];with(locals||{}){var interp;buf.push("<div"),buf.push(attrs({id:"connect-modal","class":"modal fade small-modal"},{})),buf.push("><div"),buf.push(attrs({"class":"modal-header"},{})),buf.push("><h3>Connect</h3></div><div"),buf.push(attrs({"class":"modal-body"},{})),buf.push("><input"),buf.push(attrs({id:"host",type:"text",placeholder:"Host",value:"db.vsjs.mdcn.mobi","class":"span3"},{type:!0,placeholder:!0,value:!0})),buf.push("/><input"),buf.push(attrs({id:"port",type:"text",placeholder:"Port",value:"27017","class":"span3"},{type:!0,placeholder:!0,value:!0})),buf.push("/><input"),buf.push(attrs({id:"database",type:"text",placeholder:"Database",value:"squid","class":"span3"},{type:!0,placeholder:!0,value:!0})),buf.push("/></div><div"),buf.push(attrs({"class":"modal-footer"},{})),buf.push("><a"),buf.push(attrs({id:"connect-button","class":"btn btn-primary"},{})),buf.push(">Connect</a></div></div>")}return buf.join("")}})