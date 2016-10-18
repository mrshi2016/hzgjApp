var db;
var DATABASE = 'hzgj';
var table_collect = 'collect';

/*
*初始化数据库
*/
function fnInitDatabase(callback){
	db = api.require('db');
    db.openDatabase({
        name: DATABASE
    }, callback);
}

/**创建表*/
function fnCreateTable(callback){
	var sql = 'CREATE TABLE if not exists ' + table_collect + '(exhibitId VARCHAR(100) primary key, exhibitName varchar(300), imgUrl varchar(200), startTime varchar(20), endTime varchar(20))';
	 db.executeSql({
        name: DATABASE,
        sql: sql
    }, callback);
}
/**添加收藏*/
function fnCollectOld(exhibit, callback){
	var sql = "INSERT INTO " + table_collect + "(exhibitId, exhibitName,imgUrl,startTime,endTime ) values ('"+exhibit.exhibitId+"','"+exhibit.exhibitName+"','"+exhibit.imgUrl+"','"+exhibit.startTime+"','"+exhibit.endTime+"')";
    db.executeSql({
        name: DATABASE,
        sql: sql
    }, callback);
}

/**添加收藏*/
function fnCollect(exhibit, callback){
	var sql = "INSERT INTO " + table_collect + "(exhibitId, exhibitName,imgUrl,startTime,endTime ) values ('"+exhibit.id+"','"+exhibit.titleName+"','"+exhibit.cover+"','"+exhibit.startDate+"','"+exhibit.endDate+"')";
	db.executeSql({
		name: DATABASE,
		sql: sql
	}, callback);
}

/**删除收藏*/
function fnRmoveCollect(exhibitId, callback){
  
     var sql = "delete from "+ table_collect+" where exhibitId='"+exhibitId+"'";
            db.executeSql({
                name: DATABASE,
                sql: sql
            }, callback); 
	
}

/**查询单个收藏*/
function fnIsCollect(exhibit,callback){
	var sql = "select exhibitId,exhibitName, imgUrl, startTime, endTime from "+ table_collect+" where exhibitId='"+exhibit.exhibitId+"'";
    db.selectSql({
        name: DATABASE,
        sql: sql
    }, function(ret,err){

    	if(ret.data.length>0){
    		exhibit.collect="1";
    	}else
    		exhibit.collect="0";
    	callback(ret,err,exhibit);
    });
}
/**查询收藏*/
function fnSelectAllCollect(callback){
    var sql = "select exhibitId,exhibitName, imgUrl, startTime, endTime from "+ table_collect;
    db.selectSql({
        name: DATABASE,
        sql: sql
    }, callback);
}