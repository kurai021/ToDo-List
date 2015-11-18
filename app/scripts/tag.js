$(document).ready(function(){
    'use strict';
    $('textarea.title').mentionsInput({
        onDataRequest:function (mode, query, callback) {

            var data;
            var customAvatars = 'http://cdn0.4dots.com/i/customavatars/';
            var avatar = customAvatars + 'avatar7112_1.gif';

            if (navigator.mozL10n.language.code === 'es'){
                data = [
                    {
                        id:1,
                        name: '!'+'ahora',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 2,
                        name: '!'+'luego',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 3,
                        name: '!'+'más_tarde',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 4,
                        name: '!'+'mañana',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 5,
                        name: '!'+'proxima_semana',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 6,
                        name: '!'+'proximo_mes',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 7,
                        name: '!'+'fin_de_semana',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 8,
                        name: '!'+'pasado_mañana',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 9,
                        name: '!'+'proximamente',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 10,
                        name: '!'+'hoy',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 11,
                        name: '!'+'domingo',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 12,
                        name: '!'+'lunes',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 13,
                        name: '!'+'martes',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 14,
                        name: '!'+'miercoles',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 15,
                        name: '!'+'jueves',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 16,
                        name: '!'+'viernes',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 17,
                        name: '!'+'sabado',
                        avatar: avatar,
                        type: 'hashtag'
                    }
                ];
            }

            if (navigator.mozL10n.language.code === 'en-US'){
                data = [
                    {
                        id:1,
                        name: '!'+'now',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 2,
                        name: '!'+'later',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 3,
                        name: '!'+'tomorrow',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 4,
                        name: '!'+'next_week',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 5,
                        name: '!'+'next_month',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 6,
                        name: '!'+'weekend',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 7,
                        name: '!'+'day_after_tomorrow',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 8,
                        name: '!'+'soon',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 9,
                        name: '!'+'today',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 10,
                        name: '!'+'sunday',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 11,
                        name: '!'+'monday',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 12,
                        name: '!'+'tuesday',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 13,
                        name: '!'+'wednesday',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 14,
                        name: '!'+'thursday',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 15,
                        name: '!'+'friday',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 16,
                        name: '!'+'saturday',
                        avatar: avatar,
                        type: 'hashtag'
                    }
                ];
            }

            if (navigator.mozL10n.language.code === 'de'){
                data = [
                    {
                        id:1,
                        name: '!'+'jetzt',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 2,
                        name: '!'+'später',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 3,
                        name: '!'+'morgen',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 4,
                        name: '!'+'nächste_woche',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 5,
                        name: '!'+'nächsten_monat',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 6,
                        name: '!'+'wochenende',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 7,
                        name: '!'+'übermorgen',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 8,
                        name: '!'+'bald',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 9,
                        name: '!'+'heute',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 10,
                        name: '!'+'sonntag',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 11,
                        name: '!'+'montag',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 12,
                        name: '!'+'dienstag',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 13,
                        name: '!'+'mittwoch',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 14,
                        name: '!'+'donnerstag',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 15,
                        name: '!'+'freitag',
                        avatar: avatar,
                        type: 'hashtag'
                    },
                    {
                        id: 16,
                        name: '!'+'samstag',
                        avatar: avatar,
                        type: 'hashtag'
                    }
                ];
            }

            data = _.filter(data, function(item) {
                return item.name.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
            });

            callback.call(this, data);
        }
    });

    $('textarea.title').keypress(function(e){
        if(e.which === 64){
            var pick = new MozActivity({
                name: 'pick',
                data: {
                    type: 'webcontacts/contact'
                }
            });

            pick.onsuccess = function(){
                console.log('got contact');
                var contact = this.result;
                if( contact ){
                    $('textarea.title').val(
                        $('textarea.title').val() + contact.name + '.'
                    );
                 //console.log('Name '+contact.name+' number '+contact.number);
                }
            };
        }
    });
});
