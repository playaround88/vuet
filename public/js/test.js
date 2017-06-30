
//加载模板数据
var textData = {
    type: 'text-input',
    label: '姓名',
    name: 'userName',
    value: '',
    lbbr: 'true',
    lnbr: 'true'
};
//<text-input :label="label" :name="name" :value="value" :lbbr="lbbr" />

var pswdData = {
    type: 'password-input',
    label: '密码',
    name: 'password',
    value: '',
    lbbr: 'true',
    lnbr: 'true'
};
//<password-input :label="label" :name="name" :value="value" :lbbr="lbbr" />

var selectData = {
    type: 'selector',
    label: '性别',
    name: 'sex',
    options: [{ value: '1', text: '男' }, { value: '2', text: '女' }],
    lbbr: 'true',
    lnbr: 'true'
}
//<selector :label="label" :name="name" :options="options" :lbbr="lbbr" />

//
var areaData = {
    type: 'text-area',
    label: '家庭住址',
    name: 'address',
    content: '山东省菏泽市曹县',
    lbbr: 'true',
    lnbr: 'true'
}
//<text-area :label="label" :name="name" :content="content" :lbbr="lbbr" />

var fsetData = {
    type: 'fset',
    legend: '用户基本信息',
    fields: [textData, pswdData, selectData, areaData]
}
//<fset :legend="legend" :fields="fields" />

var tplData = {
    _id:'58fd66a12662372a100c7000',
    type: 'tpl',
    name: '测试模板单',
    url: '/formSave',
    active: true,
    fields: [textData, pswdData]
}
