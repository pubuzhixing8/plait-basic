import { Component } from '@angular/core';
import { withMind } from '@plait/mind';
import { PlaitElement, PlaitBoardChangeEvent, PlaitBoard } from '@plait/core';

@Component({
  selector: 'board-basic',
  templateUrl: './board-basic.component.html',
  host: {
    class: 'board-basic-container',
  },
})
export class BasicBoardComponent {
  plugins = [withMind];

  value: PlaitElement[] = demoData;

  board!: PlaitBoard;

  change(event: PlaitBoardChangeEvent) {
    // console.log(event.children);
  }

  plaitBoardInitialized(value: PlaitBoard) {
    this.board = value;
  }
}

const demoData = [
  {
    type: 'mindmap',
    id: '2',
    rightNodeCount: 3,
    data: { topic: { children: [{ text: '思维导图' }] } },
    children: [
      {
        id: '2-1',
        data: { topic: { children: [{ text: '富文本' }] } },
        children: [],
        width: 42,
        height: 20,
      },
      {
        id: '2-2',
        data: { topic: { children: [{ text: '知名脑图产品' }] } },
        children: [],
        width: 84,
        height: 20,
      },
      {
        id: '2-3',
        data: { topic: { children: [{ text: 'xxxxxxx' }] } },
        children: [],
        width: 48,
        height: 20,
      },
    ],
    width: 72,
    height: 25,
    isRoot: true,
    points: [[560, 700]],
  },
] as PlaitElement[];
