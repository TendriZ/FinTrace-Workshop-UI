import React from 'react';

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface ResponsiveTableProps {
  columns: Column[];
  data: any[];
  emptyMessage?: string;
  actionButtons?: (row: any) => React.ReactNode;
}

export function ResponsiveTable({ columns, data, emptyMessage = 'Tidak ada data', actionButtons }: ResponsiveTableProps) {
  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <>
      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-4">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
            {columns.map((column) => {
              const value = row[column.key];
              const renderedValue = column.render ? column.render(value, row) : value;

              return (
                <div key={column.key} className="flex justify-between items-start">
                  <span className="text-sm font-medium text-slate-500 flex-shrink-0 mr-4">
                    {column.label}
                  </span>
                  <span className="text-sm text-slate-900 text-right flex-1">
                    {renderedValue}
                  </span>
                </div>
              );
            })}
            {actionButtons && (
              <div className="pt-2 border-t border-slate-200">
                {actionButtons(row)}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View - Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-sm font-semibold text-slate-900"
                >
                  {column.label}
                </th>
              ))}
              {actionButtons && (
                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                  Aksi
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-slate-50 transition-colors">
                {columns.map((column) => {
                  const value = row[column.key];
                  const renderedValue = column.render ? column.render(value, row) : value;

                  return (
                    <td key={column.key} className="px-6 py-4">
                      {renderedValue}
                    </td>
                  );
                })}
                {actionButtons && (
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {actionButtons(row)}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}