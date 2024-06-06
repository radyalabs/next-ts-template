import React, { Fragment } from 'react';

import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import type { KeyboardEvent } from 'react';

import Button from '@/components/base/Button';
import Checkbox from '@/components/base/Checkbox';
import DatePicker from '@/components/base/DatePicker';
import Select from '@/components/base/Select';
import Spinner from '@/components/base/Spinner';
import TextField from '@/components/base/Textfield';
import Tooltip from '@/components/base/Tooltip';
import Typography from '@/components/base/Typography';
import {
  IcPost, IcSearch, IcSort, IcSortingDown,
} from '@/components/icons';
import ActionButton from '@/components/ui/ActionButton';
import useDataTable from '@/components/ui/DataTable/index.hooks';
import type { TableProps } from '@/components/ui/DataTable/index.types';
import Description from '@/components/ui/Description';
import Modal from '@/components/ui/Modal';
import { INITIAL_PAGESIZE } from '@/constants/config';
import { formatDateApi, noop } from '@/utils';

const DataTable = <T extends Record<string, unknown>>(props: TableProps<T>) => {
  const {
    arrayColumnKey = '',
    arrayColumnUniqueKey = '',
    appendHeader,
    appendHeaderPosition = 'end',
    columns,
    data,
    exportBtnLabel = 'Export Data',
    hiddenColumns = [],
    label,
    loading = false,
    page = 1,
    pageSize = INITIAL_PAGESIZE,
    rowActions = [],
    rowActionsColumnTitle = 'Action',
    searchPlaceholder = 'Cari',
    showAuditTrail = true,
    showCountTotal = false,
    showExportButton = false,
    showPagination = false,
    showPageSizeChanger = true,
    showSearch = true,
    showCheckBox = false,
    statusLabels = ['Active', 'Inactive'],
    totalData = 0,
    uniqueRowKey,
    onClickDetail = noop,
    onClickExport = noop,
    selectedRows,
    selectAll,
  } = props;
  const { emptyState } = label || {};
  const {
    title: emptyTitle = 'Mohon maaf, Pencarian tidak ditemukan',
    message: emptyMessage = 'Mohon cek kembali kata kunci dan filter yang anda masukkan',
  } = emptyState || {};
  const {
    auditData,
    displayPage,
    displayPageSize,
    filterExist,
    filterInputValues,
    filterValues,
    initFilterVal,
    openAuditTrail,
    pageSizeOptions,
    sortState,
    searchQuery,
    handleChangePage,
    handleCloseAuditTrail,
    handleFilterChange,
    handleFilterInputChange,
    handleOpenAuditTrail,
    handlePageSizeChange,
    handleSearchQueryChange,
    handleSort,
    onQuickPageChange,
    onSubmitPage,
    submitSearch,
    handleRowSelect,
    handleSelectAll,
  } = useDataTable<T>(props);
  return (
    <>
      <div className="flex justify-between items-center flex-wrap p-2">
        <div className="flex gap-4 items-baseline">
          {(appendHeader && appendHeaderPosition === 'start') && (
            appendHeader
          )}
          {(showPageSizeChanger || showSearch) && (
            <div className="text-base text-neutral-600 flex items-center py-2">
              {showPageSizeChanger && (
                <>
                  <Typography as="span">Show </Typography>
                  <Select
                    className="inline-block mx-2"
                    value={displayPageSize}
                    options={pageSizeOptions}
                    onChange={handlePageSizeChange}
                    size="small"
                  />
                </>
              )}
              {showSearch && (
                <TextField
                  classes={{ container: 'my-0', input: 'w-64' }}
                  value={searchQuery}
                  size="small"
                  placeholder={searchPlaceholder}
                  onChange={handleSearchQueryChange}
                  onKeyUp={submitSearch}
                  prependObject={<IcSearch />}
                />
              )}
            </div>
          )}
        </div>
        { showExportButton && (
          <div>
            <Button variant="outline" color="primary" onClick={onClickExport}>
              {exportBtnLabel}
            </Button>
          </div>
        )}
        {(appendHeader && appendHeaderPosition === 'end') && (
          appendHeader
        )}
      </div>
      <TableContainer sx={{ maxHeight: '52vh', maxWidth: '100%' }} className="mx-auto">
        <Table
          stickyHeader
          sx={{ minWidth: 800 }}
          className="table-fixed border-solid border border-neutral-300
            rounded-xl border-separate border-tools-table-outline py-4 mb-2"
        >
          <TableHead>
            <TableRow className="[&>th]:font-bold [&>th]:text-n-13">
              {showCheckBox && (
                <TableCell
                  width={40}
                  classes={{ root: 'break-words border-2 border-primary-500 sticky left-0 z-20 bg-n-1 px-1' }}
                  align="center"
                >
                  <div className="flex justify-center">
                    <Checkbox
                      checked={selectAll}
                      onChange={(e) => handleSelectAll(e)}
                    />
                  </div>
                </TableCell>
              )}
              <TableCell
                width={40}
                classes={{ root: 'break-words border-2 border-primary-500 sticky left-0 z-20 bg-n-1 px-1' }}
                align="center"
              >
                No.
              </TableCell>
              {columns.map((column) => (
                (!column.hideColumn && !hiddenColumns.includes(column.dataKey)) && (
                  <TableCell
                    sortDirection="asc"
                    key={column.dataKey}
                    classes={{
                      root: `break-words border-2 border-primary-500 
                    ${column.sticky ? ' sticky z-20' : ''}`,
                    }}
                    sx={column.sticky ? { left: `${column.stickyPosition}px` } : {}}
                    width={column.width || 100}
                  >
                    {(column.sortable && column.sortKey) && Object.keys(sortState).length ? (
                      <TableSortLabel
                        active={sortState[column.sortKey].active}
                        direction={sortState[column.sortKey].direction}
                        onClick={() => handleSort(column.sortKey || '')}
                        IconComponent={IcSortingDown}
                        hideSortIcon
                        className="hover:text-n-13 text-n-13"
                      >
                        <span>{column.name}</span>
                        {!sortState[column.sortKey].active && <IcSort className="fill-n-13" />}
                      </TableSortLabel>
                    ) : column.name}
                  </TableCell>
                )
              ))}
              {rowActions.length > 0 && (
                <TableCell
                  width={100}
                  classes={{ root: 'break-words border-2 border-primary-500' }}
                  align="center"
                >
                  {rowActionsColumnTitle}
                </TableCell>
              )}
              {showAuditTrail && (
                <TableCell
                  width={50}
                  classes={{ root: 'break-words border-2 border-primary-500' }}
                  align="center"
                >
                  Audit Trail
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody className="[&>tr>td]:py-2">
            {!!filterExist && (
              <TableRow>
                <TableCell
                  width={40}
                  classes={{ root: 'bg-n-1 sticky left-0 z-10' }}
                />
                {columns.map(({
                  dataKey,
                  filterKey,
                  filterOption,
                  filterType = 'dropdown',
                  hideColumn = false,
                  sticky,
                  stickyPosition,
                  width,
                  searchable = false,
                }, i) => (
                  (!hideColumn && !hiddenColumns.includes(dataKey)) && (
                    <TableCell
                      sortDirection="asc"
                      key={dataKey}
                      classes={{
                        root: `bg-n-1 ${sticky ? ' sticky z-10' : ''}`,
                      }}
                      sx={sticky ? { left: `${stickyPosition}px` } : {}}
                      width={width || 100}
                    >
                      {Boolean(filterKey) && (
                        <>
                          {filterType === 'dropdown' && (
                            <Select
                              options={filterOption}
                              placeholder="All"
                              size="small"
                              value={filterValues.length ? filterValues[i] : initFilterVal[i]}
                              block
                              className="w-full"
                              showSearch={searchable}
                              onChange={(e) => handleFilterChange(String(e.target.value), i, filterKey || '')}
                            />
                          )}
                          {filterType === 'text' && (
                            <TextField
                              placeholder="Search"
                              size="small"
                              value={filterValues.length ? filterValues[i] : initFilterVal[i]}
                              block
                              className="w-full"
                              onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                                if (e.key === 'Enter') {
                                  handleFilterChange(filterInputValues[i], i, filterKey || '');
                                }
                              }}
                              onChange={(e) => handleFilterInputChange(String(e.target.value), i)}
                            />
                          )}
                          {filterType === 'date' && (
                            <DatePicker
                              placeholder="Select Date"
                              size="small"
                              value={(() => {
                                if (filterInputValues.length) {
                                  return new Date(filterInputValues[i]);
                                }
                                return initFilterVal[i] ? new Date(initFilterVal[i]) : null;
                              })()}
                              block
                              views={columns[i].dateViews}
                              className="w-full"
                              onChange={(e) => (handleFilterChange(e ? formatDateApi(e) : '', i, filterKey || ''))}
                            />
                          )}
                        </>
                      )}
                    </TableCell>
                  )
                ))}
                {rowActions.length > 0 && (
                  <TableCell
                    width={80}
                  />
                )}
                {showAuditTrail && (
                  <TableCell
                    width={50}
                  />
                )}
              </TableRow>
            )}
            {loading && (
              <TableRow>
                <TableCell
                  colSpan={
                    columns.length
                    + (rowActions.length > 0 ? 1 : 0)
                    + (showAuditTrail ? 1 : 0)
                    + 1
                    + (showCheckBox ? 1 : 0)
                  }
                >
                  <div className="flex justify-center items-center w-full min-h-[300px]">
                    <Spinner width={80} height={80} />
                  </div>
                </TableCell>
              </TableRow>
            )}
            {!loading && (data.length > 0 ? data.map((row, i) => (
              <Fragment key={String(row[uniqueRowKey])}>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {showCheckBox && (
                    <TableCell
                      width={40}
                      classes={{ root: 'break-words sticky left-0 z-10 bg-n-1 px-1' }}
                      align="center"
                    >
                      <div className="flex justify-center">
                        <Checkbox
                          checked={
                            selectAll
                            || (
                              selectedRows
                              && selectedRows.includes(String(row[uniqueRowKey])))
                          }
                          onChange={() => handleRowSelect(row)}
                        />
                      </div>
                    </TableCell>
                  )}
                  <TableCell
                    component="td"
                    scope="row"
                    className="break-words sticky left-0 z-10 bg-n-1 px-1"
                    align="center"
                    rowSpan={arrayColumnKey
                      ? (row[arrayColumnKey] as Array<Record<string, unknown>> || []).length || 1
                      : 1}
                  >
                    <Typography as="span">
                      {page * pageSize - pageSize + i + 1}
                    </Typography>
                  </TableCell>
                  {columns.map((column) => (
                    (!column.hideColumn && !hiddenColumns.includes(column.dataKey)) && (
                      <TableCell
                        component="td"
                        scope="row"
                        key={column.dataKey}
                        classes={{
                          root: `break-words bg-n-1 
                      ${column.sticky ? ' sticky z-10' : ''}`,
                        }}
                        sx={column.sticky ? { left: `${column.stickyPosition}px` } : {}}
                        rowSpan={!column.isArrayColumn
                          ? (row[arrayColumnKey] as Array<Record<string, unknown>> || [])
                            .length || 1
                          : 1}
                      >
                        {!column.isArrayColumn ? (
                          <>
                            {column.dataType === 'action-detail' && (
                              <Button
                                variant="text"
                                className="text-base text-primary-500 text-left p-0"
                                onClick={() => onClickDetail(String(row[uniqueRowKey]))}
                                disabled={column.disableKey ? !!row[column.disableKey] : false}
                              >
                                {String(row[column.dataKey])}
                              </Button>
                            )}
                            {column.dataType === 'number' && (
                              <span>{Number(row[column.dataKey])}</span>
                            )}
                            {column.dataType === 'status' && (
                              <Chip
                                color={row[column.dataKey] ? 'success' : 'info'}
                                label={row[column.dataKey] ? statusLabels[0] : statusLabels[1]}
                                classes={{
                                  root: 'rounded-xl text-sm font-semibold min-w-[6rem]',
                                  colorSuccess: 'bg-success-500 text-n-1',
                                  colorInfo: 'bg-[#a7a7a7] text-n-10',
                                }}
                              />
                            )}
                            {(column.dataType === 'element') && (
                              row[column.dataKey]
                            )}
                            {(!column.dataType || column.dataType === 'string') && (
                              <span className={column.className}>
                                {String(row[column.dataKey])}
                              </span>
                            )}
                          </>
                        ) : (
                          <span className={column.className}>
                            {
                              !(row[arrayColumnKey] as Array<Record<string, unknown>>)[0]
                                ? '-'
                                : String((
                                  row[arrayColumnKey] as Array<Record<string, unknown>>
                                )[0][column.dataKey])
                            }
                          </span>
                        )}
                      </TableCell>
                    )
                  ))}
                  {rowActions.length > 0 && (
                    <TableCell
                      component="td"
                      scope="row"
                      align="center"
                      rowSpan={arrayColumnKey
                        ? (row[arrayColumnKey] as Array<Record<string, unknown>> || []).length || 1
                        : 1}
                      width={100}
                    >
                      <div className="flex justify-center gap-2">
                        {rowActions.map(({
                          onClick,
                          disabledFn = () => false,
                          showFn = () => true,
                          color = 'default',
                          icon = null,
                          size = 'small',
                          tooltip = '',
                          variant = 'default',
                        }) => (
                          showFn(row) && (
                            <Tooltip
                              key={color + icon}
                              title={tooltip}
                            >
                              <div>
                                {size === 'small' ? (
                                  <ActionButton
                                    color={color}
                                    onClick={() => onClick(row)}
                                    disabled={disabledFn(row)}
                                    variant={variant}
                                  >
                                    {icon}
                                  </ActionButton>
                                ) : (
                                  <Button
                                    color={color}
                                    onClick={() => onClick(row)}
                                    disabled={disabledFn(row)}
                                    size="small"
                                    variant={variant}
                                  >
                                    {icon}
                                  </Button>
                                )}
                              </div>
                            </Tooltip>
                          )
                        ))}
                      </div>
                    </TableCell>
                  )}
                  {showAuditTrail && (
                    <TableCell
                      component="td"
                      scope="row"
                      align="center"
                      rowSpan={arrayColumnKey
                        ? (row[arrayColumnKey] as Array<Record<string, unknown>> || []).length || 1
                        : 1}
                    >
                      <div className="flex justify-center">
                        <ActionButton onClick={() => handleOpenAuditTrail(row)}>
                          <IcPost />
                        </ActionButton>
                      </div>
                    </TableCell>
                  )}
                </TableRow>
                {arrayColumnKey
                  && (row[arrayColumnKey] as Array<Record<string, unknown>> || [])
                    .slice(1)
                    .map((item) => (
                      <TableRow
                        key={String(row[uniqueRowKey]) + item[arrayColumnUniqueKey]}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        {columns.filter((col) => col.isArrayColumn).map((column) => (
                          <TableCell
                            component="td"
                            scope="row"
                            key={column.dataKey}
                            classes={{
                              root: `break-words bg-n-1 
                      ${column.sticky ? ' sticky z-10' : ''}`,
                            }}
                            sx={column.sticky ? { left: `${column.stickyPosition}px` } : {}}
                          >
                            <span className={column.className}>
                              {String((item[column.dataKey]))}
                            </span>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
              </Fragment>
            )) : (
              <TableRow>
                <TableCell
                  colSpan={
                    columns.length
                    + (rowActions.length > 0 ? 1 : 0)
                    + (showAuditTrail ? 1 : 0)
                    + 1
                    + (showCheckBox ? 1 : 0)
                  }
                >
                  <div className="text-center p-24">
                    <Typography variant="title">
                      {emptyTitle}
                    </Typography>
                    <Typography>
                      {emptyMessage}
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
            )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="grid grid-cols-2 items-center [&>*]:p-4">
        {showCountTotal && (
          <Typography>
            {`Showing ${page * pageSize - pageSize + 1} - ${
              data.length < pageSize
                ? page * pageSize - pageSize + data.length
                : page * pageSize
            } from ${totalData} data`}
          </Typography>
        )}
        {showPagination && (
          <div
            className={`flex flex-row justify-end items-center [&>*]:mx-1 ${!showCountTotal ? 'col-span-2' : ''}`}
          >
            <Button
              className="w-8 px-3.5"
              size="small"
              disabled={Number(page) === 1 || !page}
              onClick={() => handleChangePage(Number(page) - 1)}
              color="primary"
            >
              &lt; Prev
            </Button>
            <TextField
              type="number"
              placeholder="Page"
              value={String(displayPage || '')}
              size="small"
              className="m-0 w-14 p-0 [&>*>*>input]:py-1.5"
              classes={{
                container: 'my-0 p-1',
                input: 'px-1',
              }}
              onKeyUp={onSubmitPage}
              onChange={onQuickPageChange}
            />
            <Button
              className="w-8 px-3.5"
              size="small"
              onClick={() => handleChangePage(Number(page) + 1)}
              disabled={data.length < pageSize}
              color="primary"
            >
              Next &gt;
            </Button>
          </div>
        )}
      </div>
      <Modal
        open={openAuditTrail}
        title="Audit Trail"
        onClose={handleCloseAuditTrail}
        width={350}
      >
        <Modal.Content className="[&>*]:mb-4">
          <Description label="Created By" value={String(auditData.createdByFullName)} />
          <Description label="Created Date" value={String(auditData.createdAt)} />
          <Description label="Updated By" value={String(auditData.lastUpdatedByFullName)} />
          <Description label="Updated Date" value={String(auditData.lastUpdatedAt)} />
        </Modal.Content>
      </Modal>
    </>
  );
};

export default DataTable;
