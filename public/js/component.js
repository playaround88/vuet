Vue.component('tpl',{
    props:['name','url','fields','active'],
    template:
    `
        <div class="template">
        <form :action="url" method="POST">
        <h2 :class="{active:active}">{{name}}</h2>
        <hr />
        <input type="hidden" name="id" value="58fd66a12662372a100c7000" />
            <template v-for="f of fields">
                <text-input v-if="f.type=='text-input'" 
                    :label="f.label" 
                    :name="f.name" 
                    :value="f.value" 
                    :class="{active:f.active}"
                    :lbbr="f.lbbr"/>
                <password-input v-if="f.type=='password-input'" 
                    :label="f.label" 
                    :name="f.name" 
                    :value="f.value" 
                    :class="{active:f.active}"
                    :lbbr="f.lbbr" />
                <selector v-if="f.type=='selector'"
                    :label="f.label" 
                    :name="f.name" 
                    :options="f.options" 
                    :class="{active:f.active}"
                    :lbbr="f.lbbr" />
                <text-area v-if="f.type=='text-area'"
                    :label="f.label" 
                    :name="f.name" 
                    :content="f.content" 
                    :class="{active:f.active}"
                    :lbbr="f.lbbr" />

                <br v-if="f.lnbr" />
            </template>
            <div style="margin-top:20px;text-align:center;">
            <input type="submit" value="提交" />
            <input type="reset" value="重置" />
            </div>
        </form>
        </div>
    `
});

/*
Vue.component('fset',{
    props:['legend','fields'],
    template:
    `
        <fieldset :class="active">
            <legend>{{legend}}</legend>
            <template v-for="f of fields">
                <text-input v-if="f.type=='text-input'" 
                    :label="f.label" 
                    :name="f.name" 
                    :value="f.value" 
                    :lbbr="f.lbbr"/>
                <password-input v-if="f.type=='password-input'" 
                    :label="f.label" 
                    :name="f.name" 
                    :value="f.value" 
                    :lbbr="f.lbbr" />
                <selector v-if="f.type=='selector'"
                    :label="f.label" 
                    :name="f.name" 
                    :options="f.options" 
                    :lbbr="f.lbbr" />
                <text-area v-if="f.type=='text-area'"
                    :label="f.label" 
                    :name="f.name" 
                    :content="f.content" 
                    :lbbr="f.lbbr" />

                <br v-if="f.lnbr" />
            </template>
        </fieldset>
    `
});
*/

//<text-input :label="label" :name="name" :value="value" :lbbr="lbbr" />
Vue.component('text-input',{
    props:['label','name','value','active','lbbr'],
    template:
    `
        <span :class="{active:active}">
        <label>{{label}}: </label>
        <br v-if="lbbr" />
        <input type="text" :name="name" :value="value" />
        </span>
    `
});

Vue.component('password-input',{
    props:['label','name','value','active','lbbr'],
    template:
    `
        <span :class="{active:active}">
        <label>{{label}}: </label>
        <br v-if="lbbr" />
        <input type="password" :name="name" :value="value" />
        </span>
    `
});

Vue.component('selector',{
    props:['label','name','options','active','lbbr'],
    template:
    `
    <span :class="{active:active}">
        <label>{{label}}: </label>
        <br v-if="lbbr" />
        <select :name="name">
            <option v-for="op in options" v-bind:value="op.value">{{op.text}}</option>
        </select>
    </span>
    `
});

Vue.component('text-area',{
    props:['label','name','content','active','lbbr'],
    template:
    `
    <span :class="{active:active}">
        <label>{{label}}: </label>
        <br v-if="lbbr" />
        <textarea :name="name">{{content}}</textarea>
    </span>
    `
})