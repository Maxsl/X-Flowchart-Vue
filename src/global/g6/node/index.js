/**
 * Created by OXOYO on 2019/7/4.
 *
 * 注册自定义节点
 */

import rectangle from './rectangle'
import roundedRectangle from './rounded-rectangle'
import ellipse from './ellipse'
import square from './square'
import circle from './circle'
import process from './process'
import diamond from './diamond'
import parallelogram from './parallelogram'
import hexagon from './hexagon'
import triangle from './triangle'
import cylinder from './cylinder'
import cloud from './cloud'
import document from './document'
import internalStorage from './internal-storage'
import cube from './cube'
import step from './step'
import trapezoid from './trapezoid'
import tape from './tape'
import note from './note'
import card from './card'
import callout from './callout'
import actor from './actor'
import or from './or'
import and from './and'
import dataStorage from './data-storage'

const obj = {
  rectangle,
  roundedRectangle,
  ellipse,
  square,
  circle,
  process,
  diamond,
  parallelogram,
  hexagon,
  triangle,
  cylinder,
  cloud,
  document,
  internalStorage,
  cube,
  step,
  trapezoid,
  tape,
  note,
  card,
  callout,
  actor,
  or,
  and,
  dataStorage
}

export default function (G6) {
  Object.values(obj).map(item => {
    G6.registerNode(item.name, item.options, item.extendName)
  })
}
