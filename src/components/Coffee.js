import React from "react";
import "./Coffee.scss";

function Coffee() {
  return (
    <div class="grid">
      <div class="item">
        <div class="cup cup-tall espresso">
          <div class="handle"></div>
        </div>
        <div class="info">
          <h1>espresso</h1>
          <p>Single shot of espresso.</p>
        </div>
      </div>
      <div class="item">
        <div class="cup cup-tall doppio">
          <div class="handle"></div>
        </div>
        <div class="info">
          <h1>doppio</h1>
          <p>Double shot of espresso.</p>
        </div>
      </div>
      <div class="item">
        <div class="cup cup-tall lungo">
          <div class="handle"></div>
        </div>
        <div class="info">
          <h1>lungo</h1>
        </div>
      </div>
      <div class="item">
        <div class="cup cup-tall ristretto">
          <div class="handle"></div>
        </div>
        <div class="info">
          <h1>ristretto</h1>
        </div>
      </div>
      <div class="item">
        <div class="cup cup-tall macchiato">
          <div class="handle"></div>
        </div>
        <div class="info">
          <h1>macchiato</h1>
        </div>
      </div>
      <div class="item">
        <div class="cup cup-tall corretto">
          <div class="handle"></div>
        </div>
        <div class="info">
          <h1>corretto</h1>
        </div>
      </div>
      <div class="item">
        <div class="cup cup-tall conpanna">
          <div class="handle"></div>
        </div>
        <div class="info">
          <h1>con panna</h1>
        </div>
      </div>
      <div class="item">
        <div class="cup cup-tall romano">
          <div class="handle"></div>
        </div>
        <div class="info">
          <h1>romano</h1>
        </div>
      </div>
      <div class="item">
        <div class="cup cup-grande cappuccino">
          <div class="handle"></div>
        </div>
        <div class="info">
          <h1>cappuccino</h1>
        </div>
      </div>
      <div class="item">Ten</div>
      <div class="item">One</div>
      <div class="item">Two</div>
      <div class="item">Three</div>
      <div class="item">Four</div>
      <div class="item">Fifteen</div>
      <div class="item">One</div>
      <div class="item">Two</div>
      <div class="item">Three</div>
      <div class="item">Four</div>
      <div class="item">Twenty</div>
    </div>
  );
}

export default Coffee;
