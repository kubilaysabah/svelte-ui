<script lang="ts">
	import { ChevronDownIcon, ChevronUpIcon } from '@lucide/svelte';
	import { Button } from '$components';

	let isDropdownOpen = $state<boolean>(false);

	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen; // togle state on click
	};

	const handleDropdownFocusLoss = ({
		relatedTarget,
		currentTarget
	}: {
		relatedTarget: EventTarget | null;
		currentTarget: EventTarget | null;
	}) => {
		// use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
		if (
			relatedTarget instanceof HTMLElement &&
			currentTarget instanceof HTMLElement &&
			currentTarget.contains(relatedTarget)
		)
			return; // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null)
		isDropdownOpen = false;
	};
</script>

<div class="flex items-center justify-between">
	<div class="dropdown" onfocusout={handleDropdownFocusLoss}>
		<button class="btn m-1" onclick={handleDropdownClick}>
			{#if isDropdownOpen}
				<ChevronDownIcon />
			{:else}
				<ChevronUpIcon />
			{/if}
		</button>
		<ul
			class="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow"
			style:visibility={isDropdownOpen ? 'visible' : 'hidden'}
		>
			<li><Button>Item 1</Button></li>
		</ul>
	</div>
	<p class="text-slate-300">
		isDropdownOpen: {isDropdownOpen}
	</p>
</div>

<style lang="postcss">
	@reference "tailwindcss";
</style>
