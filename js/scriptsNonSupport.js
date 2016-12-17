function get_browser_info(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }


function initNonSupport(){
    $('.removeMobile').remove()
    $('.showNonSupport').show()
    $('body').css({'overflow':'auto'})  

}


function checkBrowserVersion(){
 if (get_browser_info().name != 'Firefox' && get_browser_info().name != 'Chrome' && get_browser_info().name != 'Opera'  && get_browser_info().name != 'Safari'){
        initNonSupport()
    // alert(get_browser_info().name)
 }

 if (get_browser_info().name == 'Safari'){
    if (get_browser_info().version < 6){
        initNonSupport()
    }
 }

 if (get_browser_info().name == 'Opera'){
    if (get_browser_info().version < 34){
        initNonSupport()
    }
 }

 if (get_browser_info().name == 'Firefox'){
    if (get_browser_info().version < 30){
        initNonSupport()
    }
 }

 if (get_browser_info().name == 'Chrome'){
    if (get_browser_info().version < 32){
        initNonSupport()
    }
 }
}

checkBrowserVersion()
