<script lang="ts">
	import { Button, type ButtonProps } from '@/components';

	let { ref = $bindable(null), ...restProps }: ButtonProps = $props();
</script>

<Button bind:ref type="submit" {...restProps} />
