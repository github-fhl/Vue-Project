export default{
    //获取当天时间
    getUnix:function(){
        var date=new Date();
        return date.getTime();
    },
    //获取今年1月1日0点0分0秒时间戳
    getTodayUnix:function(){
        var date=new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    //获取标准年月日

}