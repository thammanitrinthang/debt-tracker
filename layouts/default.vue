<template>
    <div style="font-family: 'Sarabun', sans-serif;" >
        <header>
            <nav>
                <NuxtLink to="/">
                    <img src="/image/logo-isuzu.png" alt="Logo" class="logo-image" />
                </NuxtLink>

                <ul class="flex justify-center space-x-10">

                    <UDropdown :items="itemss" :popper="{ placement: 'bottom-start' }" >
                        <a>
                            สถานะการติดตามหนี้
                        </a>
                    </UDropdown>
                    <a>
                        <NuxtLink to="/list/debtor1">ลูกหนี้งวดที่ 1</NuxtLink>
                    </a>
                    <a>
                        <NuxtLink to="/list/debtor2">ลูกหนี้งวดที่ 2</NuxtLink>
                    </a>
                    <a>
                        <NuxtLink to="/">ลูกหนี้ NPL</NuxtLink>
                    </a>
                    <a>
                        <NuxtLink to="/">ลูกหนี้คาดว่าจะสูญหาย</NuxtLink>
                    </a>
                    <a>
                        <NuxtLink to="/">ลูกหนี้สูญหาย</NuxtLink>
                    </a>
                    <a>
                        <NuxtLink to="/">ลูกหนี้ปกติ</NuxtLink>
                    </a>
                    <a>
                        <NuxtLink to="/">แบบฟอร์มส่งเอกสาร</NuxtLink>
                    </a>
                </ul>

                <span></span>
                <span></span>
                <span></span>
                <div class="nav-item">
                    <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
                        :popper="{ placement: 'bottom-start' }">
                        <UAvatar alt="Thammanit Rinthang" size="md" />

                        <template #account="{ item }">
                            <div class="text-left">
                                <p>
                                    Signed in as
                                </p>
                                <p class="truncate font-medium text-gray-900 dark:text-white">
                                    {{ item.label }}
                                </p>
                            </div>
                        </template>

                        <template #item="{ item }">
                            <span class="truncate">{{ item.label }}</span>

                            <UIcon :name="item.icon"
                                class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
                        </template>
                    </UDropdown>
                </div>

            </nav>
        </header>

        <div class="main-content">
            <div class="page-content">
                <slot />
            </div>
        </div>
    </div>
</template>
  
<script setup>
const items = [
    [{
        label: 'Thammanit Rinthang',
        slot: 'account',
        disabled: true
    }], [{
        label: 'Sign out',
        icon: 'i-heroicons-arrow-left-on-rectangle'
    }]
]
const itemss = [
    [{ label: 'การส่งจดหมาย', to: '/track/letter', color: 'green' },
    { label: 'การโทรติดตาม', to: '/track/callphone', color: 'blue' },
    { label: 'การส่ง Outsource', to: '/track/outsource', color: 'orange' },
    { label: 'การส่งศาล', to: '/', color: 'red' },
    { label: 'รายชื่อการติดตามทั้งหมด', to: '/', color: 'purple' },]
]
</script>
  
<style scoped>
a {
    font-size: 15px;

    color: white;
}

a:hover {
    color: #cbd5e1;
}

.logo-image {
    width: 200px;
    height: auto;
    margin-right: 10px;
}

nav {
    display: flex;
    align-items: center;
    background-color: #58A756;
    justify-content: space-between;
    color: #fff;
    padding: 10px;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
}

.nav-link {
    text-decoration: none;
    color: inherit;

}

.nav-link :hover {
    background: #A9C183;
}


.main-content {
    display: flex;
    padding: 50px;
}

.page-content {
    flex-grow: 1;
    padding: 20px;
    justify-content: center;
}
</style>
  