<template>
<el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#696969"
        text-color="#000000"
        active-text-color="#000000"
        collapse-transition>
    <el-menu-item index="1">
        <router-link to="/select">
            <img alt="blacklist" src="../assets/logo.png" height="60" width="180">
        </router-link>
    </el-menu-item>

    <el-menu-item index="2">
        <router-link to="/select">
        <a>
            <i class="el-icon-s-data"></i>
            探索
        </a>
        </router-link>
    </el-menu-item>

    <el-menu-item index="3">
        <router-link to="/create">
        <a>
            <i class="el-icon-menu"></i>
            分类
        </a>
        </router-link>
    </el-menu-item>

    <el-menu-item index="4">
        <router-link to="/create">
        <a>
            <i class="el-icon-s-opportunity"></i>
            讨论
        </a>
        </router-link>
    </el-menu-item>

<!--    <el-col :span="12">-->
    <div class="right-menu">
        <el-autocomplete
                class="inline-input right-menu-item "
                v-model="state1"
                :fetch-suggestions="querySearch"
                placeholder="找找你想要的吧~"
                @select="handleSelect"
                clearable
        ></el-autocomplete>
<!--    </el-col>-->
        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
            <div class="avatar-wrapper">
                <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
                <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu slot="dropdown">
                <router-link to="/profile/index">
                    <el-dropdown-item>Profile</el-dropdown-item>
                </router-link>
                <router-link to="/">
                    <el-dropdown-item>Dashboard</el-dropdown-item>
                </router-link>
                <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
                    <el-dropdown-item>Github</el-dropdown-item>
                </a>
                <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
                    <el-dropdown-item>Docs</el-dropdown-item>
                </a>
                <el-dropdown-item divided @click.native="logout">
                    <span style="display:block;">Log Out</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>

</el-menu>

</template>

<script>
    export default {
        name: 'NavMenu',
        data() {
            return {
                restaurants: [],
                sso_username:"weizhuogood",
                state1: '',
                state2: ''
            };
        },
        methods: {
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    { "value": "外星人机架", "address": "长宁区新渔路144号" },
                    { "value": "Johnny机架", "address": "上海市长宁区淞虹路661号" },
                    { "value": "Kiss飞控", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "Betaflight飞控", "address": "天山西路438号" }
                ];
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }

</script>

<style>
    .user_info{
        paddingRight: 12px;
        paddingLeft: 0;
        float: right;
        height: 50%;
    }
    .right-menu {
        float: right;
        height: 100%;
        line-height: 50px;
    }
    .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;
    }

    .avatar-container {
        margin-right: 30px;
    }
    .avatar-wrapper {
        margin-top: 5px;
        position: relative;
    }

    .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }

    .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
    }






</style>
