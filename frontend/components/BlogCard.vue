<template>
    <NuxtLink tag="div" :to="`/posts/${post.id}`" class="shadow-2xl blockcard">
        <div class="image h-2/5 w-full">
            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg">
        </div>
        <div class="details border">
            <div class="title border"><NuxtLink><span class="mb-3"></span></NuxtLink></div>
            <div class="excerpt border"></div>
            <!-- <div class="other-details">
                <div class="w-16 h-16"><img class="rounded-full" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt=""></div>
                <div class="w-4/5 flex flex-col">
                    <div class="h-1/2 text-xs pl-3 pt-4 font-bold"></div>
                    <div class="h-1/2 flex flex-row">
                        <div class="w-2/5 text-xs pl-3 pt-1 text-gray-600"></div>
                    </div>
                </div>
            </div> -->
        </div>
    </NuxtLink>
</template>

<script setup>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

    const {post} =defineProps(["post"])
    const emit = defineEmits();
    const postId=ref('')

    //Bu kısım computed olarak yeniden yazılacak
    dayjs.extend(utc)
    dayjs.extend(timezone)

    // const timeZone = dayjs.tz.guess()
    // const date = dayjs(post.published_at).tz(timeZone).format('MMM DD,YYYY')
</script>

<style lang="css">
.blockcard{
    display: flex;
    flex-direction: column;
    height: 25rem;
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
}
.blockcard:hover{
    transform: scale(1.1);
}
.image{
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    overflow: hidden;
}
.image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; 
    display: block;
}
.details{
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}
.tag span{
    font-size: small;
    color: #8fc74a;
    margin-left: 0.3rem;
    width: auto;
}
.title{
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    height: auto;
}
.excerpt{
    height: 6.5rem;
    overflow: hidden;
    margin-bottom: 0rem;
    display: -webkit-box;
    font-size: smaller;
    -webkit-line-clamp: 5;
    color: rgb(82, 80, 80);
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    white-space: normal;
}
.other-details{
    padding-top: 0.5rem;
    display: flex;
    flex-direction: row;
    height: 30%;
}
.other-details div img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; 
}
.bullet{
    letter-spacing: 0.2rem;
}
/* .share-button{
    width: 2rem;
    margin-left: 0.3rem;
} */
/* .share-icon{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
}
.share-icon:hover{
    transform: scale(1.2);
    cursor: pointer;
}
.share-icon::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-60%);
  background-color: #333;
  color: #fff;
  padding: 0.2rem;
  border-radius: 0.2rem;
  font-size: small;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}
.share-icon:hover::after {
  opacity: 1;
  visibility: visible;
} */
@media (max-width: 420px){
    .blockcard{
        margin-bottom: -3.1rem;
        width: 110%;
        margin-left: -0.4rem;
    }
    .blockcard:hover{
        transform: scale(1.05);
    }
    .title{
        font-size: 0.9rem;
    }
}
@media (min-width:420px)and(max-width:820px)
{
    .blockcard{
        margin-bottom: -3.1rem;
        width: 110%;
        margin-left: -0.4rem;
    }
}
</style>