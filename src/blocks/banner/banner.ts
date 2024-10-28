import Banner from "./Banner.svelte";
import './banner.scss'
import './tile.scss'
import { hydrate } from 'svelte';

export default async function decorate(block: Element) {

    const data = {
        pictureEl: block.querySelector('picture'),
    }

    hydrate(Banner, {
        target: block,
        props: data
    })
}
