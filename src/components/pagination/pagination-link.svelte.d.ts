import { Pagination as PaginationPrimitive } from 'bits-ui';
import { type ButtonProps } from '@/components/button';
type $$ComponentProps = PaginationPrimitive.PageProps & ButtonProps & {
    isActive: boolean;
};
declare const PaginationLink: import("svelte").Component<$$ComponentProps, {}, "ref">;
type PaginationLink = ReturnType<typeof PaginationLink>;
export default PaginationLink;
