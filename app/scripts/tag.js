$(document).ready(function(){
    $('textarea.title').mentionsInput({
        onDataRequest:function (mode, query, callback) {
            
            var data;
            
            if(navigator.mozL10n.language.code == 'es'){
                data = [
                    { id:1, name:'!'+'ahora', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:2, name:'!'+'luego', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:3, name:'!'+'más_tarde', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:4, name:'!'+'mañana', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:5, name:'!'+'proxima_semana', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:6, name:'!'+'proximo_mes', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:7, name:'!'+'fin_de_semana', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:8, name:'!'+'pasado_mañana', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:9, name:'!'+'proximamente', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:10, name:'!'+'hoy', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:11, name:'!'+'domingo', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:12, name:'!'+'lunes', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:13, name:'!'+'martes', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:14, name:'!'+'miercoles', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:15, name:'!'+'jueves', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:16, name:'!'+'viernes', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:17, name:'!'+'sabado', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' }
                ];
            }
            
            else{
                data = [
                    { id:1, name:'!'+'now', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:2, name:'!'+'later', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:3, name:'!'+'tomorrow', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:4, name:'!'+'next_week', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:5, name:'!'+'next_month', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:6, name:'!'+'weekend', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:7, name:'!'+'day_after_tomorrow', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:7, name:'!'+'soon', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:8, name:'!'+'today', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:9, name:'!'+'sunday', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:10, name:'!'+'monday', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:11, name:'!'+'tuesday', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:12, name:'!'+'wednesday', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:13, name:'!'+'thursday', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:14, name:'!'+'friday', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' },
                    { id:15, name:'!'+'saturday', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'hashtag' }
                ];
            }
            
            data = _.filter(data, function(item) { return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 });

            callback.call(this, data);
        }
    });
    
    $('textarea.title').keypress(function(e){
        if(e.which == 64){
            var pick = new MozActivity({
                name: "pick",
                data: {
                    type: "webcontacts/contact"
                }
            });
            
            pick.onsuccess = function(){
                console.log("got contact");
                var contact = this.result;
                if( contact ){
                    $('textarea.title').val($('textarea.title').val() + contact.name + ',');
                 //console.log( "Name " + contact.name + " number "+ contact.number );
                }
            }
        }
    });
});