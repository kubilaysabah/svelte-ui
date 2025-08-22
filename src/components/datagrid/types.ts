export interface ColumnProps<T> {
	label: string;
	key: keyof T;
	class?: string;
}

export interface RowProps<T> {
	data: T;
	class?: string;
}

export interface DataGridProps<T> {
	class?: string;
	columns?: ColumnProps<T>[];
	rows?: RowProps<T>[];
}
