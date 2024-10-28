<script lang="ts" context="module">
    export type BannerProps = {
        pictureEl: HTMLPictureElement | null | undefined;
    };
</script>

<script lang="ts">
    import Image from "Blocks/banner/Image.svelte";

    const { pictureEl }: BannerProps = $props();
    let img;

    if (pictureEl) {
        img = {
            pictureEl,
            preload: true,
            breakpoints: [
                // {media: '(max-width: 800px)', width: '650'},
                // {media: '(max-width: 1140px)', width: '1150'},
                // {media: '(max-width: 3000px)', width: '1593'},
                // {media: '(min-width: 3001px)', width: '2048'},


                {media: '(max-width: 768px)', width: '960'},
                {media: '(max-width: 960px)', width: '1536'},
            ]
        }
    }

</script>

<div class="banner-entry container responsivegrid aem-GridColumn aem-GridColumn--default--12 at-element-marker">

    <div class="container">
        <div class="root responsivegrid responsivegrid--gutters-col">


            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                        <div class="banner-entry container responsivegrid aem-GridColumn aem-GridColumn--default--12">

                            <div id="banner-b7303cc3e2" class="cmp-container">


                                <div class="nab-banner nab-banner--image" data-analytics-internal-promo="MH24040-P">
                                    <div class="nab-banner--background-image">
                                        <div class="image">

<!--                                                <img class="cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image" alt="" src="/public/three-people-outside-house-banner-3000x1000.jpeg">-->
                                                <Image {...img} />


                                            </div>

                                    </div>
                                    <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters">
                                        <div class="grid--12 grid">
                                            <div class="gridColumn--default--5 gridColumn--sm--6 gridColumn--xs--12 gridColumn">
                                                <div class="responsivegrid nab-banner__primary-content">



                                                    <div class="tile tile--white-card">

                                                        <div class="nab-tile nab-tile--banner">
                                                            <div class="nab-tile__content">
                                                                <div class="title cmp-title--h1-appearance"><div class="cmp-title">
                                                                    <h2 class="cmp-title__heading">
        <span role="text">


            <span class="cmp-title__text h2">

                No more first home FOMO
            </span>
        </span>
                                                                    </h2>
                                                                </div>



                                                                </div>

                                                                <div class="text parbase"><div class="nab-text">
                                                                    <p>With a 5% deposit and no LMI, the First Home Guarantee, proudly supported by NAB, can help you get ready to make a winning bid.</p>
                                                                    <p><span class="disclaimer-text">Terms and conditions, fees, charges, eligibility and lending criteria apply.</span></p>
                                                                </div>



                                                                </div>

                                                            </div>
                                                            <div class="nab-call-to-action">

                                                                <div class="nab-call-to-action__buttons">
                                                                    <div class="button nab-button--large nab-button--primary">

                                                                        <a href="/content/nabrwd/en/personal/home-loans/home-guarantee-scheme.html" aria-label="Find out more about the Home Guarantee Scheme" class="nab-button">



                                                                            <span>Find out more</span>



                                                                        </a>




                                                                    </div>

                                                                    <div class="button1 button nab-button-link--red">






                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>










                                                    </div>



                                                </div>
                                            </div>
                                            <div class="gridColumn--default--6 gridColumn--xs--12 gridColumn">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">



                    </div>
                </div>
                <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">



                    </div>
                </div>
                <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">



                    </div>
                </div>
                <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">



                    </div>
                </div>
                <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">



                    </div>
                </div>


            </div>
        </div>

    </div>

</div>