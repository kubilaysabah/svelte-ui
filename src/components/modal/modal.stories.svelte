<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
    import { Button } from '$components';
	import Modal from './modal.svelte';

	const { Story } = defineMeta({
		component: Modal,
		title: 'Components/Modal',
		tags: ['autodocs'],
		argTypes: {
            closeOnBackdropClick: {
                control: 'boolean',
                description: 'Whether the modal should close when the backdrop is clicked'
            },
            closeOnEscape: {
                control: 'boolean',
                description: 'Whether the modal should close when the escape key is pressed'
            },
            forceClose: {
                control: 'boolean',
                description: 'Whether the modal should be forcefully closed'
            },
            size: {
                control: 'select',
                options: ['sm', 'md', 'lg', 'xl', 'xxl', 'fit'],
                description: 'Size of the modal'
            },
            title: {
                control: 'text',
                description: 'Title of the modal'
            }
		}
	});
</script>


<Story name="Default Usage" args={{
    closeOnBackdropClick: true,
    closeOnEscape: true,
    size: 'md',
    title: 'Default Modal'
}}>
    <Button size="small" variant="outline" color="primary">Close</Button>
    <Button size="small" variant="fill" color="primary">Submit</Button>
</Story>