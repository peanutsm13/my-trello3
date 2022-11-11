<template>
    <div class="list">
        <div class="listheader">
            <p class="listtitle">
                {{ title }}
            </p>
            <div class="deletelist" @click="removelist">X</div>
            <card
                v-for="(item, index) in cards"
                :body="item.body"
                :key="item.id"
                :cardIndex="index"
                :listindex="listindex"
            />
        </div>
        <card-add :listIndex="listIndex" />
    </div>
</template>

<script>
import CardAdd from "./CardAdd.vue";
import Card from "./Card.vue";
export default {
    components: { CardAdd, Card },
    //親コンポーネント(ListAdd?)から受け取るデータを定義
    props: {
        title: {
            type: String,
            required: true,
        },
        listindex: {
            type: Number,
            required: true,
        },
    },
    methods: {
        removelist: function () {
            if (confirm("本当にこのリストを削除しますか？")) {
                this.$store.dispatch("removelist", {
                    listindex: this.listindex,
                });
            }
        },
    },
};
</script>
