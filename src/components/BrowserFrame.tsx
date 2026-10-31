type BrowserFrameProps = { url: string; title: string };

function BrowserFrame({ url, title }: BrowserFrameProps) {
  const host = new URL(url).host;

  return (
    <div className="mb-3 overflow-hidden rounded-lg border border-line">
      <div className="flex items-center gap-2 border-b border-line bg-line px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="flex-1 truncate rounded-md bg-page px-3 py-0.5 text-center text-xs text-body">
          {host}
        </span>
      </div>

      <iframe
        src={url}
        title={`${title} live preview`}
        loading="lazy"
        tabIndex={-1}
        className="pointer-events-none block h-72 w-full border-0 bg-page"
      />
    </div>
  );
}
export default BrowserFrame;