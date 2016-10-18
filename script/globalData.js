
/*var interfaceShaerUrl = 'http://192.168.82.13:3900/p/';*/
var interfaceShaerUrl = 'http://cms.ahm.cn:45517/p/';
/*var baseUrl = 'http://192.168.82.13:81/hzgj/';*/
var baseUrl = 'http://cms.ahm.cn/hzgj/';
var interfaceUrl = baseUrl+'iface/jk/';
var globalConfig = {
	//服务器域名地址
	/*baseUrl: 'http://cms.ahm.cn/hzgj/',*/
	baseUrl : baseUrl,
	//推荐展览接口
	zlListTj:baseUrl+'interface/exhibitMessageList?isPub=1',
	//接口地址
	/*interfaceUrl: 'http://cms.ahm.cn/hzgj/iface/jk/',*/
	//展览列表接口 
	/*zlListUrl:'http://cms.ahm.cn/hzgj/iface/jk/exhibitlist',*/
	/*&menuId= 3*/
	zlListUrl:baseUrl+'interface/exhibitMessageList?platformid=2',
	//展览藏品 exhibitId=xx
	zlXqUrl:interfaceUrl+'exhibitdetail',
	//3d展示列表 exhibitId = XX 过滤3D is3d = 1
	zl3DListUrl:interfaceUrl+'artlist',
	//3d展示详情 artId = xx
	zl3DXqUrl:interfaceUrl+'artdetail',
	//视频展示列表 exhibitId = xx(藏品id)
	zlSpListUrl:interfaceUrl+'exhibitdetail',
	//精品列表接口 catogoryId = xx(分类id)
	jpListUrl:interfaceUrl+'finework',
	//精品详情接口  artId= xx(分类id)
	jpXqUrl:interfaceUrl+'artdetail',
	//展览藏品列表 exhibitId = xx(藏品id)
	zlCpListUrl:interfaceUrl+'artlist',
	//导览接口 floor = xx(楼层)
	dlUrl:baseUrl+'interface/fetchFloor',
	//搜索展览藏品列表（文字搜索）searchKey:xx
	ssCpList:interfaceUrl+'search',
	//分享接口 exhibitId=xx
	interfaceShaerUrl : interfaceShaerUrl,
	//个人收藏
	scxqUrl:baseUrl+'interface/exhibitMessageEntity?'


};

var exhibitTypes=["推荐展览","正在展览","即将展览","历史回顾"];
/*var baseUrl = 'http://192.168.82.13:81/hzgj/';*/


var catogoryId = ['catogoryId','陶瓷器','书画','金银玉器','文房四宝','古代文艺','潘玉良作品','古生物化石'];
var AAArecommendList =["../img/ggss2.png","../img/ggss3.png", "../img/ggss4.png","../img/ggss5.png"];

function getImagePoster (string,size) {
	//return string ? 'http://192.168.82.13:8888/hzgj/upload'+string : ''
	if(string==null||string==''){
		return '';
	}	
	if(size==null){
		size="414x414";
	}
	var index = string.indexOf('/',7)
	var pre = string.substring(0,index)
	var fix =string.substring(index);
	return pre+'/resize_'+size+fix;
		
}
