<template>
    <h1>Whatsapp click to chat demo</h1>
    <VueSocialChat icon class="whatsapp-chat" dir="rtl" :attendants="attendants">
        <template v-slot:header>
            <p>سلام! روی یکی از نمایندگان ما در زیر کلیک کنید و ما در اسرع وقت به شما پاسخ میدهیم.</p>
        </template>
        <template v-slot:button>
            <img
                class="inline"
                src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
                alt="icon whatsapp"
                aria-hidden="true"
            />
        </template>
        <template v-slot:footer>
            <small>
                تماس با شماره 
                <a href="tel:+55988656544" title="Call us">0938 609 7061</a>
                از ساعت 8 صبح تا 16
            </small>
        </template>
    </VueSocialChat>
</template>

<script setup lang="ts">
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
  --vsc-border-color-bottom-header: #289D37;
}
  .vsc-popup-header p {
      font-weight: 500
  }
</style>