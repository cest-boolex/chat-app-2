app.controller('LoginController',function($state,$sanitize) {
    var self=this;
    self.join=function()
    {
        //sanitize the nickname
        var nickname=$sanitize(self.nickname)
        //if the nickname input has already been sanitized, change state to chat.
        if(nickname)
        {
            $state.go('chat',{
                nickname:nickname //send nickname data to chat state
            })
        }
    };
});