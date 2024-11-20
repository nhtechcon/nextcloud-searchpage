<script lang="ts">
	export let fileId: string | null = null;

	let imageUrl: string;
	$: imageUrl = `/index.php/core/preview?fileId=${fileId}&x=512&y=512&a=true`;

	/** Tracks if the image has loaded successfully */
	let imageLoaded: boolean = false;
</script>

<img
	src={imageUrl}
	alt="File preview"
	on:error={() => imageLoaded = false}
	on:load={() => imageLoaded = true}
	style:display={imageLoaded ? "block" : "none"} 
/>

<style lang="less">
	img {
		object-fit: contain;
		object-position: center;
		box-shadow: 0px 0px 8px #7d7d7d;
		max-width: 100%;
		max-height: 100%;
	}
</style>