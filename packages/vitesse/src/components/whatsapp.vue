<template>
    <!-- <h1>Whatsapp click to chat demo</h1> -->
    <VueSocialChat
        icon
        class="whatsapp-chat"
        dir="rtl"
        :attendants="props.attendants ? props.attendants : attendants"
    >
        <template v-slot:header>
            <p>سلام! روی یکی از نمایندگان ما در زیر کلیک کنید و ما در اسرع وقت به شما پاسخ میدهیم.</p>
        </template>
        <template v-slot:button="{ open }">
        <span>
            <svg
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="#fff"
                v-show="!open"
            >
                <path
                    d="M24.023,3.977A13.488,13.488,0,0,0,14.422,0h0A13.581,13.581,0,0,0,2.354,19.806L.072,26.326A1.259,1.259,0,0,0,1.255,28a1.268,1.268,0,0,0,.419-.072l6.52-2.282A13.579,13.579,0,0,0,24.023,3.977ZM22.862,22.019a11.941,11.941,0,0,1-14.043,2.1,1.265,1.265,0,0,0-1.009-.078L1.886,26.114,3.959,20.19a1.265,1.265,0,0,0-.078-1.009A11.937,11.937,0,0,1,14.42,1.642h0a11.936,11.936,0,0,1,8.44,20.376Zm0,0"
                    transform="translate(0)"
                />
                <path
                    d="M139.851,122.354a1.6,1.6,0,0,0-2.266,0l-.683.683a9.944,9.944,0,0,1-3.994-3.993l.683-.683a1.6,1.6,0,0,0,0-2.266l-1.841-1.841a1.6,1.6,0,0,0-2.266,0l-1.473,1.473c-.844.844-.886,2.294-.119,4.084a17.925,17.925,0,0,0,8.242,8.242,5.945,5.945,0,0,0,2.292.546,2.441,2.441,0,0,0,1.791-.665l1.473-1.473h0a1.6,1.6,0,0,0,0-2.266Zm-.793,4.418c-.241.241-.981.325-2.276-.229a16.326,16.326,0,0,1-7.379-7.379c-.555-1.294-.47-2.035-.23-2.276l1.445-1.445,1.784,1.784-.855.855a1.253,1.253,0,0,0-.232,1.459,11.585,11.585,0,0,0,5.089,5.089,1.253,1.253,0,0,0,1.459-.232l.855-.855,1.784,1.784Zm0,0"
                    transform="translate(-120.383 -107.563)"
                />
            </svg>
            </span>
            <span>
            <svg
                v-show="open"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            </span>
        </template>
        <template v-slot:footer>
            <small>از ساعت 8 صبح الی 16 پاسخگوی شما عزیزان هستیم</small>
        </template>
    </VueSocialChat>
</template>

<script setup lang="ts">
const props = defineProps<{ attendants: any[] }>()

const open = ref(false)
const attendants = [
    {
        app: 'whatsapp',
        label: 'Support',
        name: 'Alan Ktquez',
        number: '5581983383532',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/8084606?v=4',
            alt: 'Alan Ktquez avatar'
        }
    },
    {
        app: 'whatsapp',
        label: 'Sales',
        name: 'Alexia Chapman',
        number: '5581987654321',
        avatar: {
            src: 'https://randomuser.me/api/portraits/women/63.jpg',
            alt: 'Alexia Chapman avatar'
        }
    },
    {
        app: 'whatsapp',
        label: 'Developer',
        name: 'Lucas Lima',
        number: '5583996749477',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/40927839?v=4',
            alt: 'Lucas Lima avatar'
        }
    }
]
</script>

<style>
button img {
    display: inline;
}
.whatsapp-chat {
    --whatsapp: #46c056;
    --vsc-bg-header: var(--whatsapp);
    --vsc-bg-button: var(--whatsapp);
    --vsc-outline-color: var(--whatsapp);
    --vsc-border-color-bottom-header: #289d37;
}
.vsc-popup-header p {
    font-weight: 500;
}
</style>