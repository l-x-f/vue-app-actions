/**
 * 路径处理方法
 */
class PathResolve {
  resolve(parent, path) {
    if (path && path.startsWith('/')) {
      return path
    }
    return parent && parent.startsWith('/') && parent !== '/'
      ? parent + '/' + path
      : '/' + path
  }
}

export default new PathResolve()
