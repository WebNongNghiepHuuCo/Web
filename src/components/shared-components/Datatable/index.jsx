import React, { useMemo, useEffect } from "react";
import { Table, Pagination } from "antd";
import { useTranslation } from "~/common/hooks/useTranslation";

export const LIST_PER_PAGE = [10, 20, 30, 50, 5];

export const Datatable = (props) => {
  const { t } = useTranslation();

  const {
    showPagination,
    action,
    columns,
    onRow,
    dataSource,
    rowSelection,
    metadata,
    loading = false,
    scroll,
    columnAlign,
    breadcrumb,
  } = props;

  const tableColumns = useMemo(() => {
    let tColumns = columns;
    if (columnAlign) {
      tColumns = tColumns.map((item, index) => ({
        ...item,
        align: columnAlign,
        key: index.toString(),
      }));
    }
    return tColumns;
  }, [columnAlign, columns]);

  useEffect(() => {
    if (dataSource?.length === 0 && metadata.page > 1) {
      metadata.setPage(metadata.page - 1);
    }
  }, [dataSource]);

  return (
    <>
      <div>
        {breadcrumb && (
          <>
            {breadcrumb}
          </>
        )}
        {action}
        <Table
          locale={{emptyText: t('No data'),}}
          onRow={onRow}
          rowSelection={rowSelection}
          columns={tableColumns}
          dataSource={dataSource}
          pagination={false}
          scroll={scroll}
          loading={loading}
        />
      </div>
      {showPagination && (
        <div className="d-flex justify-content-end ">
          <Pagination
            className="mb-3 mt-3"
            showSizeChanger={false}
            defaultCurrent={1}
            current={metadata.page}
            total={metadata.total}
            onChange={metadata.setPage}
            defaultPageSize={metadata.perPage}
            pageSize={metadata.perPage}
            itemRender={(page, type, originalElement) => {
              if (type === "prev") {
                return (
                  <span className="pagination-item">
                    {t("common.paginations.previous")}
                  </span>
                );
              }
              if (type === "next") {
                return (
                  <span className="pagination-item">
                    {t("common.paginations.next")}
                  </span>
                );
              }
              if (type === "jump-prev" || type === "jump-next") {
                return <span className="pagination-item">...</span>;
              }
              return <span className="pagination-item">{originalElement}</span>;
            }}
          />
        </div>
      )}
    </>
  );
};

export default Datatable;
