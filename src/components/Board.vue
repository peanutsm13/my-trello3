<template>
    <div>
        <header>my Trello</header>
        <main>
            <p class="info-line">All: 0 tasks</p>
            <div class="list-index">
                <!-- リストから値を展開し現在の値：itemとそのindexを受け取ることができる -->
                <!-- itemから更にリストで定義されたオブジェクトのキーで値にアクセスできる -->
                <!-- v-bind(:)することで、バインドさせたコンポーネント(List.vue)に値を渡すことができる -->
                <list
                    v-for="(item, index) in lists"
                    :key="item.id"
                    :title="item.title"
                    :listindex="index"
                />
                <list-add />
            </div>
        </main>
    </div>
</template>

<script>
import ListAdd from "./ListAdd.vue";
import List from "./List.vue";
import { mapState } from "vuex";
export default {
    components: {
        ListAdd,
        List,
    },
    // index.jsのstateのリストデータlistsをコンポーネントのcomputedプロパティで取得
    computed: {
        //mapState:stateで定義されたデータの名前と同じ名前の文字列でstateを呼び出すことができる
        ...mapState(["lists"]),
    },
};
</script>
