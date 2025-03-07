"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "lucide-react";
import { CSSProperties, useState } from "react";

// 定义股票数据类型
type StockData = {
  id: string;
  symbol: string;
  logo: string;
  name: string;
  price: number;
  changePercent: number;
  volume: string;
  relVolume: number;
  marketCap: string;
  pe: number;
  epsDilTTM: number;
  epsDilGrowthTTM: number;
  divYieldTTM: number;
  sector: string;
  analystRating: "Strong buy" | "buy" | "hold" | "sell" | "Strong sell";
};

// 辅助函数，计算列固定的样式
const getPinningStyles = (column: Column<StockData>, isHeader = false): CSSProperties => {
  const isPinned = column.getIsPinned();
  return {
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    position: isPinned ? "sticky" : "relative",
    // 使用与其他表头一致的背景色
    backgroundColor: isPinned 
      ? isHeader 
        ? "hsl(var(--muted) / 0.5)" // 修改这里以匹配其他表头的颜色
        : "hsl(var(--background))" 
      : "transparent",
    zIndex: isPinned ? 10 : 0,
    boxShadow: isPinned === "left" ? "5px 0 10px -5px rgba(0, 0, 0, 0.3)" : undefined,
    overflow: "visible",
  };
};

// 模拟股票数据
const stockData: StockData[] = [
  {
    id: "1",
    symbol: "GOOGL",
    logo: "G",
    name: "Apple Inc.",
    price: 336.51,
    changePercent: 2.44,
    volume: "35.46M",
    relVolume: 1.04,
    marketCap: "3.63T",
    pe: 38.33,
    epsDilTTM: 6.30,
    epsDilGrowthTTM: -1.95,
    divYieldTTM: 0.42,
    sector: "Electronic technology",
    analystRating: "Strong buy",
  },
  {
    id: "2",
    symbol: "GOOGL",
    logo: "A",
    name: "Apple Inc.",
    price: 336.51,
    changePercent: 2.44,
    volume: "35.46M",
    relVolume: 1.04,
    marketCap: "3.63T",
    pe: 38.33,
    epsDilTTM: 6.30,
    epsDilGrowthTTM: -1.95,
    divYieldTTM: 0.42,
    sector: "Consumer Staples",
    analystRating: "buy",
  },
  {
    id: "3",
    symbol: "GOOGL",
    logo: "D",
    name: "Apple Inc.",
    price: 336.51,
    changePercent: 2.44,
    volume: "35.46M",
    relVolume: 1.04,
    marketCap: "3.63T",
    pe: 38.33,
    epsDilTTM: 6.30,
    epsDilGrowthTTM: -1.95,
    divYieldTTM: 2.44,
    sector: "Consumer Durables",
    analystRating: "Strong buy",
  },
  {
    id: "4",
    symbol: "GOOGL",
    logo: "T",
    name: "Apple Inc.",
    price: 336.51,
    changePercent: 2.44,
    volume: "35.46M",
    relVolume: 1.04,
    marketCap: "3.63T",
    pe: 38.33,
    epsDilTTM: 6.30,
    epsDilGrowthTTM: -1.95,
    divYieldTTM: 2.44,
    sector: "Technology Services",
    analystRating: "Strong buy",
  },
  {
    id: "5",
    symbol: "GOOGL",
    logo: "R",
    name: "Apple Inc.",
    price: 336.51,
    changePercent: 2.44,
    volume: "35.46M",
    relVolume: 1.04,
    marketCap: "3.63T",
    pe: 38.33,
    epsDilTTM: 6.30,
    epsDilGrowthTTM: -1.95,
    divYieldTTM: 2.44,
    sector: "Retail Trade",
    analystRating: "Strong buy",
  },
];

export function TableDemo() {
  const [sorting, setSorting] = useState<SortingState>([]);

  // 定义表格列
  const columns: ColumnDef<StockData>[] = [
    {
      accessorKey: "logo",
      header: "Symbol",
      enablePinning: true, // 启用列固定
      cell: ({ row, column }) => (
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full">
            {row.getValue("logo")}
          </div>
          <div>{row.original.symbol}</div>
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => (
        <div className="text-right">
          {new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(row.getValue("price"))}
        </div>
      ),
    },
    {
      accessorKey: "changePercent",
      header: "Change%",
      cell: ({ row }) => {
        const value = row.getValue<number>("changePercent");
        return (
          <div
            className={`text-right ${
              value >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {value >= 0 ? "+" : ""}
            {value.toFixed(2)}%
          </div>
        );
      },
    },
    {
      accessorKey: "volume",
      header: "Volume",
      cell: ({ row }) => <div className="text-right">{row.getValue("volume")}</div>,
    },
    {
      accessorKey: "relVolume",
      header: () => <div className="text-right whitespace-nowrap">Rel Volume</div>,
      cell: ({ row }) => <div className="text-right">{row.getValue("relVolume")}</div>,
    },
    {
      accessorKey: "marketCap",
      header: () => <div className="text-right whitespace-nowrap">Market Cap</div>,
      cell: ({ row }) => <div className="text-right">{row.getValue("marketCap")}</div>,
    },
    {
      accessorKey: "pe",
      header: "P/E",
      cell: ({ row }) => <div className="text-right">{row.getValue("pe")}</div>,
    },
    {
      accessorKey: "epsDilTTM",
      header: () => <div className="text-right whitespace-nowrap">EPS dil TTM</div>,
      cell: ({ row }) => <div className="text-right">{row.getValue("epsDilTTM")}</div>,
    },
    {
      accessorKey: "epsDilGrowthTTM",
      header: () => <div className="text-right whitespace-nowrap">
        <div>EPS dil growth</div>
        <div>TTM YoY</div>
      </div>,
      cell: ({ row }) => {
        const value = row.getValue<number>("epsDilGrowthTTM");
        return (
          <div className={`text-right ${value >= 0 ? "text-green-600" : "text-red-600"}`}>
            {value.toFixed(2)}%
          </div>
        );
      },
    },
    {
      accessorKey: "divYieldTTM",
      header: () => <div className="text-right whitespace-nowrap">
        <div>Div yield %</div>
        <div>TTM</div>
      </div>,
      cell: ({ row }) => {
        const value = row.getValue<number>("divYieldTTM");
        return (
          <div className={`text-right ${value >= 0 ? "text-green-600" : "text-red-600"}`}>
            {value >= 0 ? "+" : ""}
            {value.toFixed(2)}%
          </div>
        );
      },
    },
    {
      accessorKey: "sector",
      header: "Sector",
      cell: ({ row }) => (
        <div className="flex items-center">
          {row.getValue("sector")}
          <ChevronRightIcon className="ml-1 w-4 h-4" />
        </div>
      ),
    },
    {
      accessorKey: "analystRating",
      header: () => <div className="text-right whitespace-nowrap">Analyst Rating</div>,
      cell: ({ row }) => {
        const rating = row.getValue<string>("analystRating");
        const color = 
          rating === "Strong buy" ? "text-green-600" :
          rating === "buy" ? "text-green-500" :
          rating === "hold" ? "text-yellow-500" :
          rating === "sell" ? "text-red-500" :
          "text-red-600";
        
        return <div className={color}>{rating}</div>;
      },
    },
  ];

  const table = useReactTable<StockData>({
    data: stockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    // 添加必要的 filterFns 属性以满足 TableOptions 类型要求
    filterFns: {
      fuzzy: () => true, // 添加必需的 fuzzy 过滤函数
    },
    enableColumnPinning: true, // 启用列固定功能
  });

  // 初始化时将第一列固定在左侧
  useState(() => {
    table.getColumn("logo")?.pin("left");
  });

  return (
    <div className="overflow-x-auto rounded-md border">
      <Table className="relative">
        <TableHeader className="h-12">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-muted/50">
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="h-10"
                  onClick={header.column.getToggleSortingHandler()}
                  style={{
                    cursor: header.column.getCanSort() ? "pointer" : "default",
                    ...getPinningStyles(header.column, true), // 传入true表示这是表头
                  }}
                >
                  <div className="flex justify-between items-center">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {{
                      asc: <ChevronUpIcon className="ml-2 w-4 h-4" />,
                      desc: <ChevronDownIcon className="ml-2 w-4 h-4" />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className="hover:bg-muted/50"
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell 
                  key={cell.id}
                  style={getPinningStyles(cell.column, false)} // 传入false表示这不是表头
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}