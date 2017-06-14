/*
* 根据name，获取列表中第一个匹配的对象
 */
function getByName(name, obj) {
    if (obj['name'] == name) {
        return obj;
    }
    if (obj.fields) {
        for (f of obj.fields) {
            if (f['name'] == name) {
                return f;
            }
        }
    }
}

//单应用入库
var app = new Vue({
    el: '#workspace',
    data: {
        tpl: tplData,
        cursor: { c: tplData }
    },
    template:
    `
        <div id="workspace">
            <aside>
                <treepane :name="tpl.name" 
                    :active="tpl.active" 
                    :fields="tpl.fields" 
                    @select="select"
                    @add="add"
                    @del="del" />
                <editpane :n="cursor.c" @apply="apply"/>
            </aside>
            <div id="preview">
                <div id="tplSaveBtn" @click="save">保存</div>
                <div class="content mCustomScrollbar" data-mcs-theme="dark">
                    <tpl :name="tpl.name" 
                        :url="tpl.url" 
                        :fields="tpl.fields" 
                        :active="tpl.active" />
                </div>
            </div>
        </div>
        `,
    methods: {
        save:function(){
            $.ajax({
                    url:'/tpl/',
                    type: "POST",
                    contentType: "application/json",
                    dataType: 'json',
                    data:JSON.stringify(tplData),
                    success: function(result) {
                        alert(result.msg);
                    }
                    });
        },
        select: function (e) {
            //获取点击的节点name
            var name = e.target.getAttribute("kn");
            var cursor = this.cursor.c;
            //重复点击
            if (name == cursor.name) return;
            //取消之前游标的活动状态
            cursor.active = false;
            //查询新的选择节点并设置活动状态
            var newCursor = getByName(name, this.tpl);
            Vue.set(newCursor, 'active', true);
            //切换游标
            this.cursor.c = newCursor;
        },
        add:function(type){
            var newObject;
            if(type=='text-input'){
                newObject = $.extend({}, textInputDefault);
            }else if(type=='password-input'){
                newObject = $.extend({}, passwordInputDefault);
            }else if(type=='selector'){
                newObject = $.extend({}, selectorDefault);
            }else if(type=='text-area'){
                newObject = $.extend({}, textareaDefault);
            }else{
                alert('异常！您添加了一个不支持的组件类型');
                return ;
            }
            //添加到组件列表
            this.tpl.fields.push(newObject);
            //切换游标
            this.cursor.c.active=false;
            newObject['active']=true;
            this.cursor.c=newObject;
        },
        del:function(){
            var cursor=this.cursor.c;
            if(cursor.type=='tpl'){
                alert('不允许删除当前编辑模板');
                return ;
            }
            this.tpl.fields=this.tpl.fields.filter(function(item){
                return !(item.name==cursor.name)
            });

            //选中当前模板
            this.cursor.c=this.tpl;
            this.tpl.active=true;
        },
        apply:function(id){
            var c=$('#'+id).find('form').serializeObject();
            $.extend(this.cursor.c, c);
        }
    }
});
