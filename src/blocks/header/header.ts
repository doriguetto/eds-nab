import Header from "./Header.svelte";
import './header.scss'
import {hydrate } from "svelte";

export default async function decorate(block: Element) {
    hydrate(Header, {
        target: block,
    })
}
