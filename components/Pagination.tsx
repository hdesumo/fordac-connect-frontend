<div className="mt-6">
  <Pagination
    page={page}
    total={totalPages}
    onNext={() => {
      if (page < totalPages) setPage(page + 1);
    }}
    onPrev={() => {
      if (page > 1) setPage(page - 1);
    }}
  />
</div>
