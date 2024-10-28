import Banner from "./Banner.svelte";
import './banner.scss'
import './tile.scss'
import { hydrate } from 'svelte';

export default async function decorate(block: Element) {
    hydrate(Banner, {
        target: block,
    })
}
