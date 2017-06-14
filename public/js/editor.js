Vue.component('treepane',{
    props:['name','active','fields'],
    template:
    `
    <div id="treepane">
        <div class="tree mCustomScrollbar" data-mcs-theme="dark">
            <a type="tpl" :kn="name" @click="select" :class="{active:active}">{{name}}</a>
            <ul>
                <li v-for="f of fields">
                    <a v-if="f.label" :type="f.type" :kn="f.name" @click="select" :class="{active:f.active}">{{f.label}}[{{f.name}}]</a>
                </li>
            </ul>
        </div>
        <div class="menubar">
            <select name="type">
                <option value="text-input">文本框</option>
                <option value="password-input">密码框</option>
                <option value="selector">下拉选择</option>
                <option value="text-area">文本域</option>
            </select>
            <input type="button" value="添加" @click="add" />
            <input type="button" value="删除" @click="del" />
        </div>
    </div>
    `,
    methods:{
        select:function(e){
            this.$emit('select',e);
        },
        add:function(e){
            //获取类型
            var type=$(e.target).siblings('select').children('option:selected').val();
            this.$emit('add',type);
        },
        del:function(e){
            this.$emit('del');
        }
    }
});

Vue.component('editpane',{
    props:['n'],
    template:
    `
        <div id="editpane">
            <div class="editor mCustomScrollbar" data-mcs-theme="dark">
                <div><!-- 这里有个bug，不包一层，就渲染不了 -->
                <b>编辑</b>
                <hr />
                <tpl-editor v-if="n.type=='tpl'"
                    :name="n.name" />
                <text-input-editor v-if="n.type=='text-input'" 
                    :label="n.label" 
                    :name="n.name" 
                    :value="n.value" 
                    :lbbr="n.lbbr" 
                    :lnbr="n.lnbr"/>

                <password-input-editor v-if="n.type=='password-input'"
                    :label="n.label" 
                    :name="n.name" 
                    :lbbr="n.lbbr" 
                    :lnbr="n.lnbr"/>
                </div>
            </div>
            <div class="menubar">
                <input type="button" value="应用修改" @click="apply" />
            </div>
        </div>
    `,
    methods:{
        apply:function(e){
            this.$emit('apply','editpane');
        }
    }
});

Vue.component('tpl-editor',{
    props:['name'],
    template:
    `
    <form>
    <input type="hidden" name="type" value="tpl" />
        <label>模板标题：</label><br />
        <input type="text" name="name" :value="name" /><br />
    </form>
    `
});

//<text-input-editor :label="label" :name="name" :value="value" :lbbr="lbbr" :lnbr="lnbr" />
var textInputDefault={
    type:'text-input',
    label:'新建组件',
    name:'key-for-save',
    value:'',
    active:false,
    lbbr:true,
    lnbr:true
}
Vue.component('text-input-editor',{
    props:['label','name','value','lbbr','lnbr'],
    template:
    `
    <form>
    <input type="hidden" name="type" value="text-input" />
        <label>标签：</label><br />
        <input type="text" name="label" :value="label" /><br />
        <label>标签后是否换行：</label><br />
        <select name="lbbr">
            <option value="true">是</option>
            <option value="false">否</option>
        </select><br />
        <label>保存名称：</label><br />
        <input type="text" name="name" :value="name" /><br />
        <label>默认值：</label><br />
        <input type="text" name="value" :value="value" /><br />
        <label>组件后是否换行：</label><br />
        <select name="lnbr">
            <option value="true">是</option>
            <option value="false">否</option>
        </select><br />
    </form>
    `
});

//<password-input-editor :label="label" :name="name" :lbbr="lbbr" :lnbr="lnbr" />
var passwordInputDefault={
    type:'password-input',
    label:'新建组件',
    name:'key-for-save',
    value:'',
    active:false,
    lbbr:true,
    lnbr:true
}
Vue.component('password-input-editor',{
    props:['label','name','lbbr','lnbr'],
    template:
    `
    <form>
    <input type="hidden" name="type" value="password-input" />
        <label>标签：</label><br />
        <input type="text" name="label" :value="label" /><br />
        <label>标签后是否换行：</label><br />
        <select name="lbbr">
            <option value="true">是</option>
            <option value="false">否</option>
        </select><br />
        <label>保存名称：</label><br />
        <input type="text" name="name" :value="name" /><br />
        <label>组件后是否换行：</label><br />
        <select name="lnbr">
            <option value="true">是</option>
            <option value="false">否</option>
        </select><br />
    </form>
    `
});

var selectorDefault={
    type:'selector',
    label:'新建组件',
    name:'key-for-save',
    options:[],
    active:false,
    lbbr:true,
    lnbr:true
};

var textareaDefault={
    type:'text-area',
    label:'新建组件',
    name:'key-for-save',
    content:'',
    active:false,
    lbbr:true,
    lnbr:true
};