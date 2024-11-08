<script lang="ts">
	export let fileId: string | null = null;

	let imageUrl: string;
	$: imageUrl = `/index.php/core/preview?fileId=${fileId}&x=512&y=512&a=true`;

	/** Tracks if the image has loaded successfully */
	let imageLoaded: boolean = false;
</script>

<div class="preview-wrapper">
	<img
		src={imageUrl}
		alt="File preview"
		on:error={() => imageLoaded = false}
		on:load={() => imageLoaded = true}
		style:display={imageLoaded ? "block" : "none"} 
	/>
</div>

<style lang="less">
	.preview-wrapper {
		@apply w-full h-full flex items-center justify-center overflow-hidden p-4;

		img {
			@apply w-full h-auto;
			box-shadow: 0px 0px 8px #7d7d7d;
		}
	}
</style>