<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 700px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                       
                        <MenuItem name="1" v-show="!userInfo.username">
                            您好,请<router-link to="/Login">登陆</router-link>
                            <Icon type="md-person" /> | <span class="text-color-red"><router-link to="/SignUp"> 免费注册 <Icon type="md-person-add" /></router-link></span>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-cart" />
                            我的订单
                        </MenuItem>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-cart-outline"></Icon>
                                购物车
                            </template>
                            <MenuGroup title="最近加入的宝贝">
                                <MenuItem  v-for="(item, index) in shoppingCart" name="3-index" :key="index">
                                    <div class="shopping-cart-info">
                                        <div></div>
                                    </div>
                                    <p>
                                        <span>{{item.title}}</span>
                                        <span>1111</span>
                                        <span>1111</span>
                                    </p>
                                    
                                </MenuItem>
                            </MenuGroup>
                        </Submenu>
                        <MenuItem name="4">
                            <Icon type="md-chatboxes" />
                            意见反馈
                        </MenuItem>
                        <MenuItem name="5">
                            <Icon type="md-chatboxes" />
                            加入我们
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}" v-model="isCollapsed">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <!-- <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb> -->
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import store from '@/store/store';
    import { mapState, mapActions } from 'vuex';
    export default {
        data () {
            return {
                isCollapsed: false,
                visible: false
            }
        },
        computed: {
            ...mapState(['userInfo', 'shoppingCart']),
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            }
        },
        store
    }
</script>

<style>
    a {
        text-decoration: none;
        color: #999999;
    }
</style>
