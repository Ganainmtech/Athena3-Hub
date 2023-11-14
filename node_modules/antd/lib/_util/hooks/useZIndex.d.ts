export type ZIndexContainer = 'Modal' | 'Drawer' | 'Popover' | 'Popconfirm' | 'Tooltip' | 'Tour';
export type ZIndexConsumer = 'SelectLike' | 'Dropdown' | 'ColorPicker' | 'DatePicker' | 'Menu';
export declare const containerBaseZIndexOffset: Record<ZIndexContainer, number>;
export declare const consumerBaseZIndexOffset: Record<ZIndexConsumer, number>;
export declare function useZIndex(componentType: ZIndexContainer | ZIndexConsumer, customZIndex?: number): [zIndex: number | undefined, contextZIndex: number];
