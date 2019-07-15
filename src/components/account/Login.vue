<template>
    <div class="loginForm" >
        <Row type="flex" justify="center" align="middle" class="code-row-bg" style="margin-top:200px;">
            <Col span="6">
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                <FormItem label="用户名" prop="username">
                    <Input type="text" v-model="formCustom.username"></Input>
                </FormItem>
                <FormItem label="密码" prop="passwd">
                    <Input type="password" v-model="formCustom.passwd"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formCustom')">登陆</Button>
                    <Button @click="handleReset('formCustom')" style="margin-left: 8px">注册</Button>
                </FormItem>
            </Form>
        </Col>
        </Row>
        
    </div>
</template>
<script>
    import store from '@/store/store';
    import { mapMutations, mapActions } from 'vuex';
    export default {
        data () {
            return {
                formCustom: {
                    username: '',
                    passwd: '',
                },
                ruleInline: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            ...mapMutations(['SET_USER_LOGIN_INFO']),
            ...mapActions(['login']),
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style scoped>
    /* .loginForm {
        width: 300px;
        height: 100px;
    } */
</style>

